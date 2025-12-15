<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import { RotateCcw, Trophy } from 'lucide-vue-next';

// Types
interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Bullet extends GameObject {
    speed: number;
    active: boolean;
}

interface Enemy extends GameObject {
    speed: number;
    type: number;
}

interface Player extends GameObject {
    speed: number;
}

// Game state
const gameCanvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const gameStarted = ref(false);
const gameOver = ref(false);
const score = ref(0);
const highScore = ref(0);

// Game objects
const player = ref<Player>({
    x: 0,
    y: 0,
    width: 40,
    height: 50,
    speed: 300
});

const bullets = ref<Bullet[]>([]);
const enemies = ref<Enemy[]>([]);

// Game settings
const canvasWidth = 800;
const canvasHeight = 600;
let lastTime = 0;
let spawnTimer = 0;
const spawnInterval = 1.0; // seconds
let animationId: number | null = null;
let keys: { [key: string]: boolean } = {};

// Load high score
onMounted(() => {
    const saved = localStorage.getItem('spaceshooter-highscore');
    if (saved) highScore.value = parseInt(saved);

    if (gameCanvas.value) {
        ctx.value = gameCanvas.value.getContext('2d');
        // Center player
        player.value.x = canvasWidth / 2 - player.value.width / 2;
        player.value.y = canvasHeight - 100;
    }

    // Add keyboard listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    draw();
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    if (animationId) cancelAnimationFrame(animationId);
});

const handleKeyDown = (e: KeyboardEvent) => {
    if (!gameStarted.value || gameOver.value) {
        if (e.key === 'Enter') {
            startGame();
        }
        return;
    }

    keys[e.key.toLowerCase()] = true;

    // Shooting
    if (e.key === ' ') {
        e.preventDefault();
        shoot();
    }
};

const handleKeyUp = (e: KeyboardEvent) => {
    keys[e.key.toLowerCase()] = false;
};

const startGame = () => {
    gameStarted.value = true;
    gameOver.value = false;
    score.value = 0;
    bullets.value = [];
    enemies.value = [];
    spawnTimer = 0;

    // Reset player position
    player.value.x = canvasWidth / 2 - player.value.width / 2;
    player.value.y = canvasHeight - 100;

    lastTime = performance.now();
    gameLoop(lastTime);
};

const gameLoop = (currentTime: number) => {
    if (!gameStarted.value || gameOver.value) return;

    const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
    lastTime = currentTime;

    update(deltaTime);
    draw();

    animationId = requestAnimationFrame(gameLoop);
};

const update = (deltaTime: number) => {
    // Update player movement
    if (keys['w'] || keys['arrowup']) {
        player.value.y -= player.value.speed * deltaTime;
        if (player.value.y < 0) player.value.y = 0;
    }
    if (keys['s'] || keys['arrowdown']) {
        player.value.y += player.value.speed * deltaTime;
        if (player.value.y > canvasHeight - player.value.height) {
            player.value.y = canvasHeight - player.value.height;
        }
    }
    if (keys['a'] || keys['arrowleft']) {
        player.value.x -= player.value.speed * deltaTime;
        if (player.value.x < 0) player.value.x = canvasWidth - player.value.width;
    }
    if (keys['d'] || keys['arrowright']) {
        player.value.x += player.value.speed * deltaTime;
        if (player.value.x > canvasWidth - player.value.width) player.value.x = 0;
    }

    // Update bullets
    for (let i = bullets.value.length - 1; i >= 0; i--) {
        const bullet = bullets.value[i];
        bullet.y -= bullet.speed * deltaTime;

        // Remove bullets that are off screen
        if (bullet.y < -bullet.height) {
            bullets.value.splice(i, 1);
            continue;
        }

        // Check collision with enemies
        for (let j = enemies.value.length - 1; j >= 0; j--) {
            const enemy = enemies.value[j];
            if (checkCollision(bullet, enemy)) {
                enemies.value.splice(j, 1);
                bullets.value.splice(i, 1);
                score.value++;

                if (score.value > highScore.value) {
                    highScore.value = score.value;
                    localStorage.setItem('spaceshooter-highscore', score.value.toString());
                }
                break;
            }
        }
    }

    // Update enemies
    for (let i = enemies.value.length - 1; i >= 0; i--) {
        const enemy = enemies.value[i];
        enemy.y += enemy.speed * deltaTime;

        // Remove enemies that are off screen
        if (enemy.y > canvasHeight) {
            enemies.value.splice(i, 1);
            continue;
        }

        // Check collision with player
        if (checkCollision(player.value, enemy)) {
            endGame();
            return;
        }
    }

    // Spawn enemies
    spawnTimer += deltaTime;
    if (spawnTimer >= spawnInterval) {
        spawnEnemy();
        spawnTimer = 0;
    }
};

const shoot = () => {
    bullets.value.push({
        x: player.value.x + player.value.width / 2 - 2,
        y: player.value.y,
        width: 4,
        height: 15,
        speed: 500,
        active: true
    });
};

const spawnEnemy = () => {
    const type = Math.random() > 0.5 ? 1 : 2;
    const width = type === 1 ? 40 : 50;
    const height = type === 1 ? 40 : 45;

    enemies.value.push({
        x: Math.random() * (canvasWidth - width),
        y: -height,
        width,
        height,
        speed: 100 + Math.random() * 50,
        type
    });
};

const checkCollision = (obj1: GameObject, obj2: GameObject): boolean => {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
};

const endGame = () => {
    gameOver.value = true;
    gameStarted.value = false;
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
};

const draw = () => {
    if (!ctx.value) return;

    // Clear canvas with space background
    const gradient = ctx.value.createLinearGradient(0, 0, 0, canvasHeight);
    gradient.addColorStop(0, '#0a0a1f');
    gradient.addColorStop(0.5, '#1a1a3e');
    gradient.addColorStop(1, '#0f0f2e');
    ctx.value.fillStyle = gradient;
    ctx.value.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw stars
    drawStars();

    if (!gameStarted.value) return;

    // Draw player (triangle spaceship)
    drawPlayer();

    // Draw bullets
    bullets.value.forEach(bullet => drawBullet(bullet));

    // Draw enemies
    enemies.value.forEach(enemy => drawEnemy(enemy));
};

const drawStars = () => {
    if (!ctx.value) return;

    ctx.value.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let i = 0; i < 100; i++) {
        const x = (i * 123) % canvasWidth;
        const y = (i * 456) % canvasHeight;
        const size = Math.random() * 2;
        ctx.value.fillRect(x, y, size, size);
    }
};

const drawPlayer = () => {
    if (!ctx.value) return;

    const p = player.value;

    // Create gradient for player ship
    const gradient = ctx.value.createLinearGradient(p.x, p.y, p.x + p.width, p.y + p.height);
    gradient.addColorStop(0, '#a78bfa');
    gradient.addColorStop(1, '#ec4899');

    ctx.value.fillStyle = gradient;
    ctx.value.shadowBlur = 20;
    ctx.value.shadowColor = '#ec4899';

    // Draw triangle ship
    ctx.value.beginPath();
    ctx.value.moveTo(p.x + p.width / 2, p.y); // Top point
    ctx.value.lineTo(p.x, p.y + p.height); // Bottom left
    ctx.value.lineTo(p.x + p.width, p.y + p.height); // Bottom right
    ctx.value.closePath();
    ctx.value.fill();

    // Draw cockpit
    ctx.value.shadowBlur = 0;
    ctx.value.fillStyle = '#60a5fa';
    ctx.value.beginPath();
    ctx.value.arc(p.x + p.width / 2, p.y + p.height / 3, 5, 0, Math.PI * 2);
    ctx.value.fill();
};

const drawBullet = (bullet: Bullet) => {
    if (!ctx.value) return;

    const gradient = ctx.value.createLinearGradient(
        bullet.x, bullet.y, bullet.x, bullet.y + bullet.height
    );
    gradient.addColorStop(0, '#fbbf24');
    gradient.addColorStop(1, '#f59e0b');

    ctx.value.fillStyle = gradient;
    ctx.value.shadowBlur = 10;
    ctx.value.shadowColor = '#fbbf24';
    ctx.value.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    ctx.value.shadowBlur = 0;
};

const drawEnemy = (enemy: Enemy) => {
    if (!ctx.value) return;

    const gradient = ctx.value.createLinearGradient(
        enemy.x, enemy.y, enemy.x + enemy.width, enemy.y + enemy.height
    );

    if (enemy.type === 1) {
        gradient.addColorStop(0, '#ef4444');
        gradient.addColorStop(1, '#dc2626');
    } else {
        gradient.addColorStop(0, '#8b5cf6');
        gradient.addColorStop(1, '#7c3aed');
    }

    ctx.value.fillStyle = gradient;
    ctx.value.shadowBlur = 15;
    ctx.value.shadowColor = enemy.type === 1 ? '#ef4444' : '#8b5cf6';

    // Draw inverted triangle (enemy ship)
    ctx.value.beginPath();
    ctx.value.moveTo(enemy.x + enemy.width / 2, enemy.y + enemy.height); // Bottom point
    ctx.value.lineTo(enemy.x, enemy.y); // Top left
    ctx.value.lineTo(enemy.x + enemy.width, enemy.y); // Top right
    ctx.value.closePath();
    ctx.value.fill();

    ctx.value.shadowBlur = 0;
};
</script>

<template>
    <Head title="Astro Blitz - Space Shooter" />

    <div class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        <!-- Background effects -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

        <!-- Animated orbs -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s" />

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl">
            <div class="text-center mb-6">
                <!-- Title -->
                <h1
                    v-motion="{
                        initial: { opacity: 0, y: -30 },
                        enter: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }"
                    class="text-5xl md:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                >
                    Astro Blitz
                </h1>

                <p
                    v-motion="{
                        initial: { opacity: 0 },
                        enter: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
                    }"
                    class="text-white/50 text-sm md:text-base mb-4"
                >
                    Infinite Space Shooter - Get as many points as possible! 🚀
                </p>
            </div>

            <!-- Game Container -->
            <div
                v-motion="{
                    initial: { opacity: 0, scale: 0.9 },
                    enter: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } }
                }"
                class="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:p-6 backdrop-blur-sm mb-6"
            >
                <!-- Score Display -->
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-2">
                        <span class="text-white/60 text-sm">Score:</span>
                        <span class="text-2xl font-bold text-indigo-400">{{ score }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <Trophy class="h-4 w-4 text-amber-400" />
                        <span class="text-white/60 text-sm">Best:</span>
                        <span class="text-xl font-bold text-amber-400">{{ highScore }}</span>
                    </div>
                </div>

                <!-- Game Canvas -->
                <div class="relative">
                    <canvas
                        ref="gameCanvas"
                        :width="canvasWidth"
                        :height="canvasHeight"
                        class="w-full border border-white/10 rounded-lg"
                        style="max-width: 800px; margin: 0 auto; display: block;"
                    />

                    <!-- Start/Game Over Overlay -->
                    <div
                        v-if="!gameStarted || gameOver"
                        class="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-lg"
                    >
                        <div class="text-center p-6 max-w-md">
                            <h3 class="text-3xl font-bold text-white mb-3">
                                {{ gameOver ? 'Game Over!' : 'Astro Blitz' }}
                            </h3>
                            <p class="text-white/60 mb-2">
                                {{ gameOver ? `Final Score: ${score}` : 'Infinite shooter game' }}
                            </p>
                            <p class="text-white/40 text-sm mb-6">
                                {{ gameOver ? '' : 'Get as many points as possible!' }}
                            </p>

                            <!-- Controls -->
                            <div class="mb-6 text-left bg-white/5 rounded-lg p-4 text-sm">
                                <p class="text-white/80 font-semibold mb-2">Controls:</p>
                                <div class="grid grid-cols-2 gap-2 text-white/60">
                                    <div>W / ↑ = Up</div>
                                    <div>S / ↓ = Down</div>
                                    <div>A / ← = Left</div>
                                    <div>D / → = Right</div>
                                    <div class="col-span-2">Space = Shoot</div>
                                </div>
                            </div>

                            <button
                                @click="startGame"
                                class="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                {{ gameOver ? 'Play Again' : 'Start Game' }}
                            </button>
                            <p class="text-white/40 text-xs mt-3">Press Enter to start</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Restart Button -->
            <div
                v-if="gameStarted && !gameOver"
                v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
                }"
                class="flex justify-center"
            >
                <button
                    @click="startGame"
                    class="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-indigo-500/30 text-white hover:from-indigo-500/30 hover:to-rose-500/30 transition-all duration-300"
                >
                    <RotateCcw class="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Restart Game</span>
                </button>
            </div>
        </div>

        <!-- Bottom gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
</template>

