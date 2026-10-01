export interface Project {
  id: string;
  title: string;
  category: 'fintech' | 'enterprise' | 'media' | 'ecommerce';
  categoryLabel: string;
  client: string;
  role: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  keyContributions: string[];
  architectureHighlights: string[];
  liveStatus: 'Production' | 'Enterprise Internal' | 'Deployed';
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  coreTech: string[];
  keyImpact: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: number;
    highlight?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Syed Atif Qadeer",
    preferredName: "Atif Qadeer",
    title: "Senior Software Engineer",
    specialization: "Laravel · WordPress & WooCommerce · Microservices · PHP Ecosystem · High-Scale APIs",
    tagline: "Engineering scalable backend architectures, custom WordPress solutions, high-throughput event pipelines, and secure web systems.",
    summary:
      "Passionate and results-driven Software Engineer with over 4 years of professional experience building dynamic, secure, and scalable web applications from the ground up. I specialize in Laravel, bespoke WordPress (custom themes, plugins & WooCommerce), CodeIgniter, CakePHP, and Core PHP, backed by solid full-stack capabilities in MySQL database design, RESTful API development, Stripe payment integration, and modern frontend technologies. Experienced in microservices, asynchronous queues, WebSockets, Docker, and CI/CD pipelines.",
    email: "atifqadeer26@gmail.com",
    phone: "+923438677088",
    phoneFormatted: "+92 343 8677088",
    location: "Lahore, 54000, Pakistan",
    timezone: "PKT (UTC+5)",
    availability: "Available for Senior Backend Roles, Architecture Consulting & Contracts",
    linkedin: "https://www.linkedin.com/in/syedatif-qadeer-691791105",
    github: "https://github.com",
    avatar: "/src/assets/images/syed_atif_qadeer.webp",
    yearsExperience: "4+",
    projectsDelivered: "25+",
    uptimeRecord: "99.98%",
  },

  skillsCategories: [
    {
      category: "Backend & Frameworks",
      description: "Core architectural engines, MVC frameworks, and API layers",
      skills: [
        { name: "Laravel (8 / 9 / 10 / 11)", level: "Expert", years: 4, highlight: true },
        { name: "Core PHP & OOP", level: "Expert", years: 4, highlight: true },
        { name: "Microservices & API Gateways", level: "Advanced", years: 3, highlight: true },
        { name: "RESTful API Architecture", level: "Expert", years: 4, highlight: true },
        { name: "Eloquent ORM", level: "Expert", years: 4 },
        { name: "CodeIgniter", level: "Advanced", years: 3 },
        { name: "CakePHP", level: "Advanced", years: 2 },
        { name: "Laravel Lumen", level: "Advanced", years: 3 },
        { name: "SOAP & XML Services", level: "Proficient", years: 2 },
      ],
    },
    {
      category: "WordPress & CMS Engineering",
      description: "Custom plugin development, bespoke theme architecture, WooCommerce, and headless WP",
      skills: [
        { name: "WordPress (Custom Themes & Plugins)", level: "Expert", years: 4, highlight: true },
        { name: "WooCommerce & Custom Gateways", level: "Expert", years: 4, highlight: true },
        { name: "Advanced Custom Fields (ACF Pro)", level: "Expert", years: 4, highlight: true },
        { name: "WP REST API & Headless CMS", level: "Advanced", years: 3, highlight: true },
        { name: "Custom Post Types & Taxonomies", level: "Expert", years: 4 },
        { name: "WP Performance, Redis & Cache", level: "Expert", years: 4, highlight: true },
        { name: "Gutenberg Block Customization", level: "Advanced", years: 2 },
        { name: "WP-CLI & Multisite Management", level: "Advanced", years: 3 },
        { name: "WordPress Security & Hardening", level: "Expert", years: 4 },
      ],
    },
    {
      category: "Real-Time & Asynchronous",
      description: "High-throughput messaging, event streaming, and sockets",
      skills: [
        { name: "Laravel Queues & Workers", level: "Expert", years: 3, highlight: true },
        { name: "Redis & Horizon", level: "Advanced", years: 3 },
        { name: "WebSockets & Laravel Echo", level: "Advanced", years: 2, highlight: true },
        { name: "Event-Driven Architecture", level: "Advanced", years: 3 },
        { name: "Pusher Integration", level: "Advanced", years: 3 },
      ],
    },
    {
      category: "Database & Data Modeling",
      description: "Relational schema engineering, indexing, and high-performance querying",
      skills: [
        { name: "MySQL Schema Design", level: "Expert", years: 4, highlight: true },
        { name: "Query Optimization & EXPLAIN", level: "Advanced", years: 4 },
        { name: "Database Indexing & Normalization", level: "Expert", years: 4 },
        { name: "Data Migrations & Seeding", level: "Expert", years: 4 },
        { name: "Redis Caching Layer", level: "Advanced", years: 3 },
      ],
    },
    {
      category: "Payment & Security",
      description: "Financial integrations, token authentication, and hardened protocols",
      skills: [
        { name: "Stripe API & Webhooks", level: "Expert", years: 3, highlight: true },
        { name: "Laravel Sanctum & JWT", level: "Expert", years: 3, highlight: true },
        { name: "Role-Based Access Control (RBAC)", level: "Expert", years: 4 },
        { name: "Data Encryption & Sanitization", level: "Advanced", years: 4 },
        { name: "HTTP Interceptors & Middleware", level: "Expert", years: 4 },
      ],
    },
    {
      category: "Frontend & Full-Stack",
      description: "Dynamic user interfaces, styling frameworks, and responsive UX",
      skills: [
        { name: "HTML5 / CSS3 / SASS", level: "Expert", years: 4 },
        { name: "Tailwind CSS", level: "Advanced", years: 3, highlight: true },
        { name: "Bootstrap 4/5", level: "Expert", years: 4 },
        { name: "JavaScript / ES6+", level: "Advanced", years: 4 },
        { name: "jQuery", level: "Expert", years: 4 },
        { name: "Laravel Blade Templates", level: "Expert", years: 4 },
        { name: "Figma to Responsive Code", level: "Advanced", years: 3 },
      ],
    },
    {
      category: "DevOps, Cloud & Tools",
      description: "Containerization, automated pipelines, and cloud environments",
      skills: [
        { name: "Docker & Containerization", level: "Advanced", years: 3, highlight: true },
        { name: "CI/CD (GitHub Actions)", level: "Advanced", years: 3, highlight: true },
        { name: "Laravel Envoy Deployments", level: "Advanced", years: 2 },
        { name: "Git & GitHub Collaboration", level: "Expert", years: 4 },
        { name: "AWS (EC2, S3, RDS)", level: "Proficient", years: 2 },
        { name: "GCP / Azure Deployment", level: "Proficient", years: 2 },
        { name: "JIRA & Agile Scrum", level: "Advanced", years: 4 },
        { name: "PHPUnit & TDD", level: "Advanced", years: 3 },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "ibstec",
      company: "IBSTEC",
      role: "Laravel Developer / Senior Software Engineer",
      period: "May 2024 – Present",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      summary:
        "Leading backend engineering on high-throughput microservices applications, real-time message broadcasting, and complex database schema design.",
      bullets: [
        "Architected and deployed microservices architecture using Laravel, decoupling monolith workloads into modular services communicating via standardized REST protocols.",
        "Engineered and fine-tuned high-performance RESTful APIs, maximizing Eloquent ORM performance and optimizing MySQL retrieval speeds by 38%.",
        "Configured asynchronous processing pipelines using Laravel Queues and Events, managing high-volume instant payment reconciliation and real-time analytics.",
        "Integrated WebSockets and Laravel Echo for client-server state synchronization, powering live activity streams and real-time user notification engines.",
        "Enforced zero-trust security practices across all endpoints, including token-based authentication (Sanctum), request sanitization, HTTP interceptors, and database encryption.",
        "Spearheaded database schema design and indexing for high-scale MySQL instances, preventing bottlenecks and guaranteeing high transactional reliability.",
        "Collaborated in Agile sprints using JIRA, Confluence, and Git, while actively mentoring junior developers on clean code architecture and TDD methodologies.",
      ],
      coreTech: [
        "Laravel 10/11",
        "Microservices",
        "REST APIs",
        "MySQL",
        "Queues & Events",
        "WebSockets",
        "Laravel Echo",
        "Eloquent ORM",
        "Sanctum",
        "Docker",
      ],
      keyImpact: "Improved data retrieval efficiency by 38% and reduced asynchronous task execution latency by 45%.",
    },
    {
      id: "viion",
      company: "Viion Technologies",
      role: "Laravel Developer",
      period: "January 2023 – May 2024",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      summary:
        "Developed enterprise management systems, reusable code libraries, and database optimization strategies for high-traffic web applications.",
      bullets: [
        "Engineered modular, reusable internal package libraries and helper traits adopted across multiple client projects, cutting new feature delivery time by 25%.",
        "Optimized complex relational database schemas and indexed MySQL queries, achieving significant performance gains on high-volume reporting queries.",
        "Designed and implemented responsive, accessible web interfaces utilizing HTML5, CSS3, JavaScript, and Laravel Blade with cross-browser compatibility.",
        "Established structured Git workflows and code review standards, fostering high team velocity and seamless code traceability.",
        "Refactored legacy codebases to adopt modern PSR standards, Eloquent best practices, and secure role-based access controls.",
        "Mentored junior team members through pair programming and regular technical knowledge-sharing workshops.",
      ],
      coreTech: [
        "Laravel",
        "PHP 8",
        "WordPress Integration",
        "MySQL",
        "REST APIs",
        "Git",
        "Blade",
        "JavaScript",
        "Bootstrap",
        "Composer",
      ],
      keyImpact: "Built shared service libraries cutting sprint cycle delivery times by 25% across client projects.",
    },
    {
      id: "benchmark",
      company: "Benchmark",
      role: "Core PHP, Laravel & WordPress Developer",
      period: "August 2021 – September 2022",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      summary:
        "Built robust full-stack platforms, custom WordPress themes and plugins, automated CI/CD deployment pipelines, and integrated third-party payment gateways and enterprise endpoints.",
      bullets: [
        "Designed and built production Laravel applications with clean architectural patterns, Docker containerization, and automated GitHub Actions CI/CD workflows.",
        "Authored bespoke WordPress plugins and responsive themes using modern OOP PHP, ACF Pro, and custom WP REST API endpoints for high-conversion marketing portals.",
        "Engineered WooCommerce stores with custom Stripe and PayPal payment gateways, dynamic cart calculations, and database indexing.",
        "Created secure authentication pipelines utilizing Laravel Sanctum, JWT, and custom middleware for multi-role user platforms.",
        "Authored comprehensive test suites adopting Test-Driven Development (TDD) using PHPUnit, Behat, and Laravel Dusk for functional and end-to-end browser coverage.",
        "Engineered modern responsive frontends with Laravel Blade, Tailwind CSS, and Laravel Mix, ensuring pixel-perfect fidelity across desktop and mobile screens.",
        "Integrated third-party enterprise services using SOAP and REST APIs, and authored lightweight microservices with Laravel Lumen.",
        "Deployed and monitored services across cloud environments (AWS EC2/S3, GCP) adhering to modern DevOps deployment best practices.",
      ],
      coreTech: [
        "Core PHP",
        "Laravel",
        "WordPress",
        "WooCommerce",
        "ACF Pro",
        "WP REST API",
        "Docker",
        "GitHub Actions",
        "Laravel Envoy",
        "PHPUnit",
        "Tailwind CSS",
        "MySQL",
        "AWS",
      ],
      keyImpact: "Implemented automated TDD and CI/CD pipelines, decreasing production regression errors by over 60%.",
    },
    {
      id: "wordpress-consulting",
      company: "Independent Web Engineering",
      role: "Senior WordPress & Full-Stack PHP Developer",
      period: "September 2020 – August 2021",
      location: "Lahore, Pakistan (Remote)",
      type: "Contract / Freelance",
      summary:
        "Delivered custom WordPress themes, bespoke plugin architecture, and high-performance WooCommerce solutions for international commercial clients.",
      bullets: [
        "Architected 15+ custom WordPress themes from scratch using clean OOP PHP, modern semantic CSS/Tailwind, and ACF Pro, completely avoiding heavy visual page builders for maximum performance.",
        "Built proprietary WordPress plugins providing custom post types, dynamic AJAX filtering, member management, and external REST API integrations.",
        "Engineered custom WooCommerce checkout pipelines, integrating multiple regional payment gateways (Stripe, PayPal, Cash on Delivery with SMS OTP verification).",
        "Configured Redis object caching, Cloudflare CDN, and database transient optimization, elevating client site PageSpeed Insights scores from below 50 to 95+.",
        "Executed seamless migrations of high-volume WooCommerce stores (10,000+ SKUs and user accounts) across hosting providers with zero downtime and data loss.",
      ],
      coreTech: [
        "WordPress",
        "WooCommerce",
        "Core PHP (OOP)",
        "ACF Pro",
        "WP REST API",
        "MySQL",
        "JavaScript / jQuery",
        "Stripe Gateway",
        "Redis Caching",
        "WP-CLI",
      ],
      keyImpact: "Delivered 15+ high-speed WordPress/WooCommerce websites achieving average 95+ Google PageSpeed ratings.",
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Science in Computer Science (MS CS)",
      institution: "Superior University Lahore",
      period: "2017 – 2019",
      location: "Lahore, Pakistan",
      focus: "Advanced Software Architecture, Distributed Systems, Database Engineering & Algorithms",
    },
  ] as EducationItem[],

  projects: [
    {
      id: "liberer-merchant-services",
      title: "Liberer Merchant Services – Fintech Web Platform",
      category: "fintech",
      categoryLabel: "Fintech & Payments",
      client: "Liberer Financial Network",
      role: "Lead Backend & Integration Engineer",
      duration: "6 Months",
      shortDescription:
        "High-performance fintech platform streamlining merchant onboarding, KYC verification, automated billing, and secure Stripe payment processing.",
      fullDescription:
        "Liberer Merchant Services is an enterprise-grade fintech application created to eliminate manual friction from commercial payment onboarding and recurring transactions. The platform provides merchants with an automated portal to verify company credentials, manage credit transactions, generate customizable electronic invoices, and reconcile payment gateways in real time. Architected with strict adherence to financial security and audit regulations.",
      techStack: [
        "Laravel",
        "Core PHP",
        "MySQL",
        "Stripe Connect & Billing",
        "REST APIs",
        "Bootstrap 5",
        "JavaScript/jQuery",
        "WordPress CMS Integration",
      ],
      metrics: [
        { label: "Payment Success Rate", value: "99.9%" },
        { label: "Onboarding Latency", value: "-65%" },
        { label: "Transaction Settlement", value: "Real-time" },
      ],
      keyContributions: [
        "Architected secure, scalable backend with Laravel and normalized MySQL schema for high-frequency financial ledgers.",
        "Integrated Stripe payment APIs and webhook listeners for instant tokenized payment processing and automated dispute webhooks.",
        "Engineered role-based authentication (RBAC) with two-factor validation and encrypted sensitive merchant identity documents.",
        "Crafted a responsive merchant portal providing granular transaction analytics, payout schedules, and receipt generation.",
        "Optimized complex database queries and indices to maintain sub-100ms response times during end-of-month invoice batches.",
      ],
      architectureHighlights: [
        "Idempotent Stripe webhook receiver with signature validation to guarantee zero duplicate charges.",
        "Normalized transactional ledger preventing race conditions during concurrent payouts.",
        "Multi-tier merchant permissions with immutable audit trail logging for regulatory compliance.",
      ],
      liveStatus: "Production",
      codeSnippet: {
        title: "Stripe Webhook Handler & Idempotent Ledger Entry",
        language: "php",
        code: `public function handleStripeWebhook(Request $request): JsonResponse
{
    $payload = $request->getContent();
    $sigHeader = $request->header('Stripe-Signature');
    
    // Verify cryptographic signature from Stripe webhook endpoint
    $event = \\Stripe\\Webhook::constructEvent(
        $payload, $sigHeader, config('services.stripe.webhook_secret')
    );

    // Guard against duplicate processing using atomic idempotency keys
    if (PaymentLedger::where('transaction_reference', $event->id)->exists()) {
        return response()->json(['status' => 'already_processed'], 200);
    }

    DB::transaction(function () use ($event) {
        if ($event->type === 'payment_intent.succeeded') {
            $paymentIntent = $event->data->object;
            $this->reconcileSuccessfulMerchantPayment($paymentIntent);
        }
    });

    return response()->json(['received' => true]);
}`,
      },
    },
    {
      id: "benchmark-studio",
      title: "Benchmark Studio – Visual Content & Booking Platform",
      category: "media",
      categoryLabel: "Media & Visual Platforms",
      client: "Benchmark Media Group",
      role: "Senior Backend Developer",
      duration: "5 Months",
      shortDescription:
        "Dynamic web platform for visual content creators, featuring automated booking workflows, media asset pipelines, and client delivery dashboards.",
      fullDescription:
        "Benchmark Studio provides an end-to-end digital ecosystem for commercial visual studios, handling customer intake, scheduling production shoots, tracking deliverables, and delivering high-resolution digital assets securely. Built to replace scattered email workflows with a cohesive, scalable web application tailored for media professionals.",
      techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "Blade",
        "Third-Party Cloud Storage APIs",
        "RESTful API Integration",
      ],
      metrics: [
        { label: "Query Speedup", value: "40%" },
        { label: "Client Turnaround", value: "2.5x Faster" },
        { label: "Asset Handling", value: "Multi-GB/day" },
      ],
      keyContributions: [
        "Engineered scalable backend service with Laravel to handle heavy service requests, asset metadata, and calendar booking slots.",
        "Built responsive client interface with Tailwind CSS and Laravel Blade, optimized for cross-device review and approval.",
        "Developed secure, role-gated asset distribution system with time-expiring signed download URLs.",
        "Restructured MySQL database indexing and caching, slashing query latency by 40% on media catalog lookups.",
        "Integrated external communication APIs for automated SMS/email booking confirmations and production updates.",
      ],
      architectureHighlights: [
        "Secure pre-signed upload URLs offloading large media ingestion directly to cloud buckets.",
        "Role-based authorization gates restricting draft content from unapproved client tiers.",
        "Database caching layer utilizing Redis for instant availability of studio availability slots.",
      ],
      liveStatus: "Production",
      codeSnippet: {
        title: "Signed Asset Access & Permission Gate",
        language: "php",
        code: `public function generateSecureAssetDownload(Asset $asset, User $user): string
{
    // Validate project ownership & client payment authorization
    abort_unless($user->can('view-deliverable', $asset), 403, 'Unauthorized access to studio media.');

    // Generate temporary pre-signed URL expiring in 60 minutes
    return Storage::disk('s3-secure')->temporaryUrl(
        $asset->storage_path,
        now()->addMinutes(60),
        [
            'ResponseContentDisposition' => 'attachment; filename="' . $asset->original_filename . '"',
        ]
    );
}`,
      },
    },
    {
      id: "viion-hr-portal",
      title: "Viion HR Portal – Enterprise Employee Management System",
      category: "enterprise",
      categoryLabel: "Enterprise & HR",
      client: "Viion Systems",
      role: "Laravel Developer",
      duration: "8 Months",
      shortDescription:
        "Secure, scalable internal HR portal streamlining employee lifecycle, automated attendance tracking, leave requests, and payroll reconciliation.",
      fullDescription:
        "An enterprise internal management suite engineered for Viion Systems to unify distributed human resources workflows. The platform handles daily attendance ingestion, bi-weekly payroll generation with tax brackets, hierarchical leave approvals, and employee performance tracking with real-time management metrics.",
      techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
        "Docker",
        "Bootstrap",
        "jQuery",
        "Composer Packages",
      ],
      metrics: [
        { label: "HR Admin Hours Saved", value: "15 hrs/wk" },
        { label: "Payroll Accuracy", value: "100%" },
        { label: "Active Employees", value: "500+" },
      ],
      keyContributions: [
        "Developed modular Laravel backend handling employee records, hierarchical departments, and automated salary deductions.",
        "Engineered token-based authentication and granular permission guards separating HR Admins, Managers, and Staff.",
        "Created an intuitive responsive portal with clean calendar widgets, overtime calculation engines, and downloadable payslips.",
        "Integrated third-party attendance machine logs via automated cron workers and REST endpoints.",
        "Optimized relational database joins and reporting queries to generate organization-wide audit summaries in seconds.",
      ],
      architectureHighlights: [
        "Hierarchical multi-level approval pipeline for leave requests with rollback triggers.",
        "Automated cron jobs reconciling biometric attendance logs with active payroll calculations.",
        "Audit trail tracking all salary adjustments and personnel status alterations.",
      ],
      liveStatus: "Enterprise Internal",
      codeSnippet: {
        title: "Biometric Attendance Ingestion & Overtime Worker",
        language: "php",
        code: `public function processBiometricSync(array $logs): void
{
    DB::transaction(function () use ($logs) {
        foreach ($logs as $log) {
            $record = AttendanceRecord::firstOrNew([
                'employee_id' => $log['emp_id'],
                'date'        => $log['timestamp']->toDateString(),
            ]);

            // Calculate active working hours and overtime flags
            $record->applyCheckInTime($log['timestamp']);
            $record->recalculateOvertimeEligibility();
            $record->save();
        }
    });
}`,
      },
    },
    {
      id: "novara-luxe-wordpress",
      title: "Novara Luxe – Custom WooCommerce & Headless WordPress Platform",
      category: "ecommerce",
      categoryLabel: "eCommerce & CMS",
      client: "Novara Retail Global",
      role: "Lead WordPress & WooCommerce Architect",
      duration: "5 Months",
      shortDescription:
        "High-performance bespoke WooCommerce platform featuring custom OOP plugin architecture, multi-currency Stripe checkout, and automated REST inventory sync.",
      fullDescription:
        "Novara Luxe is a flagship e-commerce solution engineered for a high-volume apparel brand. The client required an ultra-fast online shopping experience free from bloated generic themes or heavy page builders. Syed Atif Qadeer architected a tailored WordPress theme from the ground up using modern semantic markup, Tailwind CSS, and ACF Pro, developed proprietary WooCommerce plugins for customized volume discounts, implemented a seamless Stripe multi-currency checkout, and configured Redis object caching achieving sub-second page loads globally.",
      techStack: [
        "WordPress",
        "WooCommerce",
        "Core PHP (OOP)",
        "ACF Pro",
        "WP REST API",
        "Stripe Payments",
        "Redis Object Cache",
        "Tailwind CSS",
        "MySQL",
      ],
      metrics: [
        { label: "Google PageSpeed", value: "98/100" },
        { label: "Checkout Conversion", value: "+32%" },
        { label: "Product Catalog", value: "12,000+ SKUs" },
      ],
      keyContributions: [
        "Architected bespoke WordPress theme with zero page-builder bloat, utilizing Advanced Custom Fields Pro and reusable modular template parts.",
        "Authored custom WooCommerce plugin implementing dynamic tiered volume discounts and personalized cart upsells via AJAX.",
        "Integrated Stripe Elements and Apple Pay / Google Pay for lightning-fast one-click mobile checkout.",
        "Implemented headless REST API endpoints allowing the brand's mobile app to fetch catalog inventory and submit orders seamlessly.",
        "Configured Redis object caching and optimized wp_postmeta MySQL queries, reducing server response time (TTFB) to under 180ms.",
      ],
      architectureHighlights: [
        "Custom OOP plugin structure using PSR-4 autoloading and singleton controllers within WordPress hook lifecycles.",
        "Indexed database queries with custom transient caching on complex product variation attributes.",
        "Automated webhook synchronization triggering fulfillment dispatch upon WooCommerce order completion.",
      ],
      liveStatus: "Production",
      codeSnippet: {
        title: "Custom WooCommerce Tiered Pricing Plugin Hook & REST Endpoint",
        language: "php",
        code: `<?php
/**
 * Plugin Name: Novara Custom Tiered Volume Pricing & REST Endpoint
 * Description: High-performance dynamic pricing calculation and REST API sync for WooCommerce.
 */

namespace Novara\\Commerce;

defined('ABSPATH') || exit;

class TieredPricingEngine
{
    public function __construct()
    {
        // Intercept cart item pricing before totals calculation
        add_action('woocommerce_before_calculate_totals', [$this, 'applyVolumeDiscounts'], 20, 1);
        
        // Register custom REST route for mobile app pricing verification
        add_action('rest_api_init', [$this, 'registerPricingRestRoute']);
    }

    public function applyVolumeDiscounts(\\WC_Cart $cart): void
    {
        if (is_admin() && !defined('DOING_AJAX')) {
            return;
        }

        foreach ($cart->get_cart() as $cartItemKey => $cartItem) {
            $quantity = $cartItem['quantity'];
            $product  = $cartItem['data'];
            
            // Tier 1: 5+ items -> 10% off; Tier 2: 10+ items -> 20% off
            $discountMultiplier = 1.0;
            if ($quantity >= 10) {
                $discountMultiplier = 0.80;
            } elseif ($quantity >= 5) {
                $discountMultiplier = 0.90;
            }

            if ($discountMultiplier < 1.0) {
                $originalPrice = (float) $product->get_regular_price();
                $discountedPrice = round($originalPrice * $discountMultiplier, 2);
                $product->set_price($discountedPrice);
            }
        }
    }

    public function registerPricingRestRoute(): void
    {
        register_rest_route('novara/v1', '/calculate-tier', [
            'methods'  => \\WP_REST_Server::CREATABLE,
            'callback' => [$this, 'handleRestPricingCalculation'],
            'permission_callback' => '__return_true',
        ]);
    }

    public function handleRestPricingCalculation(\\WP_REST_Request $request): \\WP_REST_Response
    {
        $productId = (int) $request->get_param('product_id');
        $quantity  = (int) $request->get_param('quantity');

        $product = wc_get_product($productId);
        if (!$product) {
            return new \\WP_REST_Response(['error' => 'Product not found'], 404);
        }

        $basePrice = (float) $product->get_regular_price();
        $rate = ($quantity >= 10) ? 0.80 : (($quantity >= 5) ? 0.90 : 1.0);
        $finalUnitPrice = round($basePrice * $rate, 2);

        return new \\WP_REST_Response([
            'product_id'        => $productId,
            'quantity'          => $quantity,
            'regular_price'     => $basePrice,
            'discounted_price'  => $finalUnitPrice,
            'total'             => round($finalUnitPrice * $quantity, 2),
            'savings_percent'   => (1 - $rate) * 100,
        ], 200);
    }
}

new TieredPricingEngine();`,
      },
    },
    {
      id: "ecommerce-subscription-engine",
      title: "Modular eCommerce & Recurring Subscription Hub",
      category: "ecommerce",
      categoryLabel: "eCommerce & Subscriptions",
      client: "Global Commerce Client",
      role: "Full-Stack Laravel Engineer",
      duration: "4 Months",
      shortDescription:
        "Modular shopping and subscription engine featuring multi-tier billing, automated recurring invoice dispatch, and inventory event workers.",
      fullDescription:
        "Engineered for high-conversion web stores requiring dynamic recurring billing tiers, automated inventory decrementing, and multi-currency checkout. Powered by Laravel Queues and Redis to ensure order dispatch and confirmation emails happen asynchronously without blocking checkout latency.",
      techStack: [
        "Laravel 10",
        "Core PHP",
        "MySQL",
        "Redis",
        "Stripe Billing",
        "Tailwind CSS",
        "Blade",
      ],
      metrics: [
        { label: "Checkout Speed", value: "< 250ms" },
        { label: "Queue Throughput", value: "5k jobs/min" },
        { label: "Failed Charge Recovery", value: "+22%" },
      ],
      keyContributions: [
        "Constructed recurring subscription cycle handlers with automated dunning emails for failed customer cards.",
        "Implemented Redis-backed background queues for invoice PDF compilation and customer receipts.",
        "Integrated custom cart restoration mechanisms reducing checkout abandonment.",
      ],
      architectureHighlights: [
        "Optimistic concurrency locking preventing over-selling limited warehouse inventory.",
        "Redis Horizon dashboard monitoring queue backpressure and failed transaction alerts.",
      ],
      liveStatus: "Deployed",
    },
  ] as Project[],

  architecturePrinciples: [
    {
      title: "Clean Modular & Microservices Architecture",
      description:
        "Decoupled service layers with explicit contracts, isolating business logic from presentation layers and enabling independent scalability.",
      icon: "Layers",
      stat: "Decoupled Services",
    },
    {
      title: "High-Throughput Asynchronous Pipelines",
      description:
        "Harnessing Laravel Queues, Redis, and Events to offload CPU-intensive operations (payment verification, emails, report generation) for lightning-fast user response times.",
      icon: "Zap",
      stat: "< 100ms Latency",
    },
    {
      title: "Relational Schema Normalization & Indexing",
      description:
        "Expert MySQL modeling with composite indices, query plan analysis with EXPLAIN, and transactional integrity (ACID) to ensure zero data corruption.",
      icon: "Database",
      stat: "Zero Data Loss",
    },
    {
      title: "Zero-Trust Security & API Hardening",
      description:
        "Token-based authentication (Sanctum/JWT), strict RBAC authorization policies, encrypted data payloads, rate-limiting, and defensive input sanitization.",
      icon: "ShieldCheck",
      stat: "OWASP Compliant",
    },
  ],
};
