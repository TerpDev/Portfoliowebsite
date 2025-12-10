<script setup lang="ts">
import { Code, FileText, GitBranch } from 'lucide-vue-next';
import { marked } from 'marked';
import AnimatedTabs from "@/components/ui/stage/AnimatedTabs.vue";

const cubeWikiReadme = `# Cube Wiki API – Multitenant Knowledge Management Platform
Welcome to Cube Wiki, a multitenant knowledge-management platform built with Filament.
Cube Wiki offers a structured way to manage documentation through Applications, Categories, and Pages.

[//]: # (## Showcase)

[//]: # (### User)

[//]: # (![User Dashboard]&#40;Docs/images/dashboarduser.png&#41;)

[//]: # (![User create tenant]&#40;Docs/images/createtenant.png&#41;)

[//]: # (![User application]&#40;Docs/images/appuser.png&#41;)

[//]: # (![User application]&#40;Docs/images/catuser.png&#41;)

[//]: # (![User application]&#40;Docs/images/pageuser.png&#41;)

## Introduction
Cube Wiki is a multitenant knowledge-management platform built with Filament.
The system has two distinct roles: **Owner**, and **Member**. Users with the **Owner** role have full control over their tenant,
including creating users. Users with the **Member** role
can create and manage applications, categories, and pages. Every page is written in Markdown and stored in the Cube Wiki API.

## Features
### Multitenancy
- Each user can belong to one or multiple tenants.
- All data is fully isolated per tenant.
- Tenants can create new tenants or switch between existing one if you joined them.
- Users are put on selected tenants.
### Tenant features
- Create tenants - each tenant receives its own API token with Sanctum.
- Create and manage users.
- Assign users to one or multiple tenants.
### Users features
- Create and edit applications, categories and pages inside their tenants.
- Write pages using the build in Markdown editor.
- Switch between tenants if their in more than one.

## Applications, Categories and Pages
### Applications
- Create applications with a name — slugs are generated automatically.
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
- Create categories with an auto-generated slug.
- Each category must be linked to an application (selectable via dropdown).
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
        return $this->belongsTo(Tenants::class, 'tenant_id', 'id');
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
- Create pages with auto-generated slugs.
- Each page must be linked to a category
- Markdown editor for writing content.
- Markdown is stored as is and served via the API.
\`\`\`php
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;
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
        return $this->belongsTo(Category::class, 'category_id', 'id');
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
## Slug generation
Slug is automatically generated from the name of the application, category or page with
Spatie Sluggable package. When you create an application, category or page the slug will stay
So if you edit the name the slug will not change. So the links to the pages will not break.

Slug is used in the API for a cleaner URL structure.

#### Example of slug generation in a Model:
\`\`\`php
use Spatie\\Sluggable\\HasSlug;
use Spatie\\Sluggable\\SlugOptions;

use HasSlug;

public function getSlugOptions(): SlugOptions    {
     return SlugOptions::create()
         ->generateSlugsFrom('name')
         ->saveSlugsTo('slug')
         ->slugsShouldBeNoLongerThan(64)
         ->doNotGenerateSlugsOnUpdate();
     }
\`\`\`
## Markdown Pages
### Tables support
You can use regular Markdown syntax to create tables in your pages.
\`\`\`markdown
| Syntax     |             Description (center)              |     Foo (right) | Bar (left)      |
|------------|:---------------------------------------------:|----------------:|:----------------|
| Header     |                     Title                     |       Something | Else            |
| Paragraphs |  First paragraph. <br><br> Second paragraph.  | First paragraph | First paragraph |
\`\`\`
![Table Example](Docs/images/table.png)



## API overview
Each tenant receives one API token, generated by admin.
This token provides access to all data belonging to that tenant.
The API returns the complete hierarchical structure:

Tenant → Applications → Categories → Pages
#### Example API responce
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
The content_html might look messy, but it is just the HTML generated from the Markdown content.
In the markdown content it is just this from the page:
#### Example of page content in Markdown:
\`\`\`markdown
# What is a slug?
this is a slug
\`\`\`
## Package integration
Cube Wiki can be easily integrated into other Laravel/Filament projects
using the companion package

[CubeWikiPackage](https://github.com/TerpDev/CubeWikiPackage)

You can see the README.md of that package for more information about the integration.
## Summary
Cube Wiki is flexible and scalable multitenant wiki System with:
- Applications → Categories → Pages structure
- Markdown support for the pages
- API access per tenant
- Automatic slug generation

## Testing

\`\`\`bash
composer test
\`\`\`

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- Spatie - Sluggable package is used for slug generation
  of [Spatie's Sluggable ](https://github.com/spatie/laravel-sluggable)

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
