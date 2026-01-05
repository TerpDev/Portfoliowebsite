<script setup lang="ts">
import { Code, FileText, GitBranch } from 'lucide-vue-next';
import { marked } from 'marked';
import AnimatedTabs from "@/components/ui/stage/AnimatedTabs.vue";

const cubeWikiReadme = `
<div align="center">

# 🧊 Cube Wiki

### Multitenant Knowledge Management Platform

[![PHP](https://img.shields.io/badge/PHP-8.2+-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://php.net)
[![Laravel](https://img.shields.io/badge/Laravel-12.0-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![Filament](https://img.shields.io/badge/Filament-4.0-FDAE4B?style=for-the-badge)](https://filamentphp.com)
[![REST API](https://img.shields.io/badge/REST-API-4F46E5?style=for-the-badge)](https://restfulapi.net)

*Organize your documentation with Applications → Categories → Pages*


**Want to integrate Cube Wiki in your own Filament project?**
👉 [Check out the CubeWikiPackage](https://github.com/TerpDev/CubeWikiPackage)

</div>

---
## Introduction

Cube Wiki is a multitenant knowledge-management platform built with Filament.
The system allows you to create and manage structured documentation within your own tenant(s).

Each tenant can contain multiple **Applications**, each application can have multiple **Categories**,
and each category contains **Pages** written in Markdown.

### User Roles

- **Owner** - Full control over the tenant, can manage users and all content also
Owner can switch easy from member panel to tenant panel and back.
- **Member** - Can create and manage applications, categories, and pages

## Features

### Multitenancy
- Each user can belong to one or multiple tenants
- All data is fully isolated per tenant
- Easy switching between tenants
- Create your own tenant or join existing ones

### Structured Documentation
- **Applications** - Top-level containers for your documentation
- **Categories** - Organize content within applications
- **Pages** - Write content in Markdown with a built-in editor

### Markdown Support
- Full Markdown editor for writing pages
- Support for tables, code blocks, images, and more
- Content is automatically converted to HTML via API

### Automatic Slug Generation
- Slugs are generated automatically from names
- Slugs remain stable even when you rename content (links won't break)

### REST API
- Each tenant gets a unique API token
- Access your documentation programmatically
- Perfect for integrating with other applications
- Use the [CubeWikiPackage](https://github.com/TerpDev/CubeWikiPackage) for seamless Filament integration

## Getting Started

### Creating Your Tenant

1. Register for an account or log in
2. Create your first tenant from the dashboard
3. You'll automatically be assigned as the **Owner** of your new tenant

### Managing Users

As a tenant **Owner**, you can:
- Invite users to your tenant
- Assign them the **Owner** or **Member** role
- Manage user permissions

### Creating Documentation

#### 1. Create an Application

Applications are the top-level containers for your documentation.

- Navigate to **Applications**
- Click **New Application**
- Enter a name (slug is generated automatically)
- Save

#### 2. Create Categories

Categories help organize your content within an application.

- Navigate to **Categories**
- Click **New Category**
- Enter a name and select the parent application
- Save

#### 3. Create Pages

Pages contain your actual documentation content.

- Navigate to **Pages**
- Click **New Page**
- Enter a title and select the parent category
- Write your content using the Markdown editor
- Save

## Structure Example

Here's how your documentation might be structured in JSON format:

\`\`\`json
{
    "tenant": {
        "id": 1,
        "name": "Cube",
        "slug": "cube"
    },
    "applications": [
        {
            "id": 10,
            "tenant_id": 1,
            "name": "Hint",
            "slug": "hint",
            "categories": [
                {
                    "id": 9,
                    "tenant_id": 1,
                    "application_id": 10,
                    "name": "HintActions",
                    "slug": "hintactions",
                    "pages": [
                        {
                            "id": 9,
                            "category_id": 9,
                            "tenant_id": 1,
                            "title": "Slug",
                            "slug": "slug",
                            "content_html": "\u003Ch1\u003EWhat is a slug?\u003C/h1\u003E\\n\u003Cp\u003EThis is a slug\u003C/p\u003E\\n"
                        }
                    ]
                }
            ]
        }
    ]
}
\`\`\`

## Applications, Categories and Pages

### Applications
- Create applications with a name — slugs are generated automatically
- Applications act as the top level container for documentation

\`\`\`php
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;
use Spatie\\Sluggable\\HasSlug;
use Spatie\\Sluggable\\SlugOptions;

class Application extends Model
{
    use HasSlug;
    //slug options

    protected $fillable = ['tenant_id','name','slug'];

    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenants::class, 'tenant_id', 'id');
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }
}
\`\`\`

### Categories
- Create categories with an auto-generated slug
- Each category must be linked to an application (selectable via dropdown)

\`\`\`php
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;
use Spatie\\Sluggable\\HasSlug;
use Spatie\\Sluggable\\SlugOptions;

class Category extends Model
{
    use HasSlug;
    //slug options

    protected $fillable = ['tenant_id', 'application_id', 'name', 'slug'];

    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenants:: class, 'tenant_id', 'id');
    }

    public function application(): BelongsTo
    {
        return $this->belongsTo(Application::class, 'application_id', 'id');
    }

    public function pages(): HasMany
    {
        return $this->hasMany(Page::class);
    }
}
\`\`\`

### Pages
- Create pages with auto-generated slugs
- Each page must be linked to a category
- Markdown editor for writing content
- Markdown is stored as is and served via the API

\`\`\`php
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Spatie\\Sluggable\\HasSlug;
use Spatie\\Sluggable\\SlugOptions;

class Page extends Model
{
    use HasSlug;
    //slug options

    protected $table = 'pages';

    protected $fillable = ['tenant_id','category_id','title','slug','content'];

    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenants::class, 'tenant_id', 'id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category:: class, 'category_id', 'id');
    }

    protected static function booted(): void
    {
        static::saving(function (Page $page) {
            if ($page->category_id && !$page->tenant_id) {
                $page->tenant_id = Category::query()->whereKey($page->category_id)->value('tenant_id');
            }
        });
    }
}
\`\`\`

## Slug Generation

Slugs are automatically generated from the name of your applications, categories, and pages using the Spatie Sluggable package.

**Important:** When you edit the name of an item, the slug stays the same. This ensures that links to your pages won't break.

Example:
- Create page with title:  "Getting Started Guide"
- Generated slug: \`getting-started-guide\`
- Change title to: "Introduction Guide"
- Slug remains: \`getting-started-guide\` ✅

Slugs are used in the API for a cleaner URL structure.

### Example of slug generation in a Model:

\`\`\`php
use Spatie\\Sluggable\\HasSlug;
use Spatie\\Sluggable\\SlugOptions;

use HasSlug;

public function getSlugOptions(): SlugOptions
{
    return SlugOptions:: create()
        ->generateSlugsFrom('name')
        ->saveSlugsTo('slug')
        ->slugsShouldBeNoLongerThan(64)
        ->doNotGenerateSlugsOnUpdate();
}
\`\`\`

## Markdown Features

### Tables

You can create tables using standard Markdown syntax:

\`\`\`markdown
| Syntax     |             Description (center)              |     Foo (right) | Bar (left)      |
|------------|:---------------------------------------------:|----------------:|:----------------|
| Header     |                     Title                     |       Something | Else            |
| Paragraphs |  First paragraph. <br><br> Second paragraph.  | First paragraph | First paragraph |
\`\`\`


## Integration with Other Projects

Want to use your Cube Wiki documentation in your own Filament application?

Use the **CubeWikiPackage** to seamlessly integrate Cube Wiki into your project:

👉 [CubeWikiPackage on GitHub](https://github.com/TerpDev/CubeWikiPackage)

The package allows you to:
- Display your Cube Wiki content in your own Filament panels
- Navigate through applications, categories, and pages
- Render Markdown content as HTML
- Use your tenant's API token for authentication

## Credits

- [Spatie's Sluggable](https://github.com/spatie/laravel-sluggable) - Automatic slug generation
- [Filament](https://filamentphp.com/) - Admin panel framework
- [Laravel](https://laravel.com/) - PHP framework

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
`;
const tabs = [
    { id: "cube", label: "Cube Wiki README" },
    { id: "filament", label: "Filament Wiki README" },
];
</script>

<template>
    <section id="opdracht" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <!-- glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-16 md:px-6 md:py-24 lg:py-28">
            <!-- Header -->
            <div class="space-y-3">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
                >
                    <Code class="h-3 w-3 text-indigo-400" />
                    <span>Stage opdracht</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Cube Wiki & Filament Wiki</h2>
                <p class="max-w-lg text-sm text-white/60 sm:text-base">
                    Tijdens mijn stage bij Cube heb ik gewerkt aan een omvangrijke technische opdracht met als doel het ontwikkelen van Cube Wiki, een
                    SaaS-platform voor het beheren en publiceren van documentatie. Daarnaast heb ik gewerkt aan Filament Wiki, een bijhorende package
                    voor Filament waarmee documentatie vanuit de Cube Wiki met een API beschikbaar wordt gemaakt binnen andere applicaties.
                </p>
            </div>

            <!-- Main content -->
            <article
                class="space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8"
            >
                <!-- JOUW TEKST – ongemoeid -->
                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Tijdens mijn stage bij Cube heb ik gewerkt aan een omvangrijke technische opdracht met als doel het ontwikkelen van Cube Wiki, een
                    SaaS-platform voor het beheren en publiceren van documentatie. Daarnaast heb ik gewerkt aan Filament Wiki, een bijhorende package
                    voor Filament waarmee documentatie vanuit de Cube Wiki met een API beschikbaar wordt gemaakt binnen andere applicaties.
                </p>

                <p class="font-medium text-white/80">Doel van de opdracht:</p>

                <ul class="list-inside list-disc space-y-1 text-white/60">
                    <li>Schaalbaar zijn voor meerdere klanten (multitenancy).</li>
                    <li>Documentatie gestructureerd kunnen opslaan (applicaties, categorieën en pagina’s).</li>
                    <li>Markdown-content kunnen verwerken en tonen.</li>
                    <li>Een API aanbieden zodat documentatie in externe applicaties kan worden opgehaald.</li>
                    <li>Gebruikersvriendelijke integratie bieden binnen Filament via een package en plugins.</li>
                </ul>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Deze opdracht is gekozen omdat Cube hiervoor in de toekomst echte toepassingen heeft en omdat het meer uitdaging biedt dan een
                    standaard websiteproject.
                </p>

                <p class="font-medium text-white/80">Uitvoering en aanpak:</p>

                <p class="leading-relaxed text-white/60">
                    Voor de ontwikkeling van de Cube Wiki ben gestart met het ontwerpen van een ERD (Entity Relationship Diagram) waarin de
                    datastructuur werd vastgelegd. Vervolgens heb ik de applicatie opgezet met Laravel en Filament, een populair framework voor het
                    bouwen van beheeromgevingen.
                </p>

                <p class="font-medium text-white/80">Belangrijkste technische stappen</p>

                <ul class="list-inside list-disc space-y-1 text-white/60">
                    <li>Aanmaken van migrations en models voor datastructuur.</li>
                    <li>Opzetten van een Filament panel en aanmaken van benodigde resources.</li>
                    <li>Implementeren van multitenancy.</li>
                    <li>Ontwikkelen van een API.</li>
                    <li>Opzetten van de Filament Wiki package met behulp van een package-skeleton.</li>
                    <li>Integratie van Markdown-weergave binnen Filament.</li>
                </ul>

                <p class="font-medium text-white/80">Gebruikerservaring verbeteringen</p>

                <ul class="list-inside list-disc space-y-1 text-white/60">
                    <li>Documentatie-knop automatisch in Sidebar.</li>
                    <li>HelpAction in navbar.</li>
                    <li>HintAction bij form-components.</li>
                    <li>“Terug naar panel” knop.</li>
                </ul>

                <p class="font-medium text-white/80">Eindresultaat</p>

                <ul class="list-inside list-disc space-y-1 text-white/60">
                    <li>Multitenancy documentatiebeheer.</li>
                    <li>API-koppeling.</li>
                    <li>Filament-integratie.</li>
                    <li>Gebruiksvriendelijke navigatie.</li>
                </ul>
            </article>

            <!-- README BLOCKS -->

            <!-- README TABS -->
            <div class="mt-6">
                <AnimatedTabs :tabs="tabs" default-tab="cube" class-name="max-w-none">
                    <!-- TAB 1: Cube Wiki README -->
                    <template #cube>
                        <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                            <div class="mb-3 flex items-center gap-2">
                                <FileText class="h-4 w-4 text-indigo-400" />
                                <p class="text-sm font-medium">README – Cube Wiki</p>
                            </div>
                            <article class="markdown-body" v-html="marked(cubeWikiReadme)" />
                        </div>
                    </template>

                    <!-- TAB 2: Filament Wiki README -->
                    <template #filament>
                        <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                            <div class="mb-3 flex items-center gap-2">
                                <FileText class="h-4 w-4 text-rose-400" />
                                <p class="text-sm font-medium">README – Filament Wiki Package</p>
                            </div>
                            <pre
                                class="max-h-[320px] overflow-auto rounded-xl bg-black/80 p-4 text-xs text-white/70"
                            ><code>
# Filament Wiki Package

                                <!-- PLAK HIER JE README.md CONTENT -->
        </code></pre>
                        </div>
                    </template>
                </AnimatedTabs>
            </div>

            <!-- Links -->
            <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <div class="flex items-center gap-2 text-white/80">
                    <GitBranch class="h-4 w-4 text-indigo-300" />
                    <span>Links</span>
                </div>
                <p class="text-sm text-white/60">
                    https://github.com/TerpDev/CubeWiki<br />
                    https://github.com/TerpDev/CubeWikiPackage<br />
                    https://github.com/TerpDev/CubeWikiPackage#demo
                </p>
            </div>

            <!-- Learnings + conclusie -->
            <article class="space-y-4 text-white/60">
                <p class="font-medium text-white/80">Wat ik heb geleerd</p>
                <ul class="list-inside list-disc">
                    <li>Laravel backend ontwikkeling op moeilijk niveau.</li>
                    <li>Filament.</li>
                    <li>Multitenancy architectuur.</li>
                    <li>Bouwen en publiceren van packages.</li>
                    <li>Communicatie met collega’s en praktijkopleider.</li>
                </ul>

                <p class="font-medium text-white/80">Conclusie</p>
                <p>
                    Deze opdracht heeft mij geholpen om mijn kennis te verdiepen in de backend met deze complexe opdracht. Ik ben trots op het
                    eindresultaat en blij dat Cube dit project later ook echt kan gebruiken.
                </p>
            </article>
        </div>
    </section>
</template>
