import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

export interface DsChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_ds_checklist_items';
  info: {
    description: 'Performance checklist item with bold label and description';
    displayName: 'DS Checklist Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface DsCloudPlan extends Struct.ComponentSchema {
  collectionName: 'components_ds_cloud_plans';
  info: {
    description: 'Cloud hosting plan with resource specs (vCPU, RAM, Storage, Bandwidth)';
    displayName: 'DS Cloud Plan';
  };
  attributes: {
    bandwidth: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    priceNote: Schema.Attribute.String;
    ram: Schema.Attribute.String;
    storage: Schema.Attribute.String;
    vcpu: Schema.Attribute.String;
  };
}

export interface DsComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_ds_comparison_rows';
  info: {
    description: 'Single row in the ICSDC vs Others comparison table';
    displayName: 'DS Comparison Row';
  };
  attributes: {
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    icsdc: Schema.Attribute.String;
    icsdcStatus: Schema.Attribute.Enumeration<['check', 'partial', 'cross']>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    others: Schema.Attribute.String;
    othersStatus: Schema.Attribute.Enumeration<
      ['neutral', 'check', 'partial', 'cross']
    >;
  };
}

export interface DsControlPanel extends Struct.ComponentSchema {
  collectionName: 'components_ds_control_panels';
  info: {
    description: 'Hosting control panel option (cPanel, Plesk, DirectAdmin, etc.)';
    displayName: 'DS Control Panel';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface DsCtaBand extends Struct.ComponentSchema {
  collectionName: 'components_ds_cta_bands';
  info: {
    description: 'Call-to-action banner section with title, description, and two CTA link buttons';
    displayName: 'DS CTA Band';
  };
  attributes: {
    ctaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    ctaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsCtaLink extends Struct.ComponentSchema {
  collectionName: 'components_ds_cta_links';
  info: {
    description: 'Call-to-action button with text and link';
    displayName: 'DS CTA Link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsFaqEntry extends Struct.ComponentSchema {
  collectionName: 'components_ds_faq_entries';
  info: {
    description: 'FAQ question and answer pair';
    displayName: 'DS FAQ Entry';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsFooterAddress extends Struct.ComponentSchema {
  collectionName: 'components_ds_footer_addresses';
  info: {
    description: 'Footer company address block';
    displayName: 'DS Footer Address';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface DsFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_ds_footer_links';
  info: {
    description: 'Single footer navigation link';
    displayName: 'DS Footer Link';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_ds_footer_link_groups';
  info: {
    description: 'Footer column with title and list of links';
    displayName: 'DS Footer Link Group';
  };
  attributes: {
    groupId: Schema.Attribute.String;
    links: Schema.Attribute.Component<'ds.footer-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_ds_footer_sections';
  info: {
    description: 'Complete footer with logo, address, socials, link groups, copyright';
    displayName: 'DS Footer Section';
  };
  attributes: {
    address: Schema.Attribute.Component<'ds.footer-address', false>;
    copyrightText: Schema.Attribute.String;
    linkGroups: Schema.Attribute.Component<'ds.footer-link-group', true>;
    logo: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'ds.social-link', true>;
  };
}

export interface DsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_ds_hero_sections';
  info: {
    description: 'Hero section with eyebrow, title, price, CTA buttons, server rack, and uptime badge';
    displayName: 'DS Hero Section';
  };
  attributes: {
    ctaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    ctaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    price: Schema.Attribute.String;
    priceCurrency: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'&#8377;'>;
    priceNote: Schema.Attribute.String;
    priceUnit: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/mo'>;
    serverRack: Schema.Attribute.Component<'ds.server-rack-unit', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    uptimeBadgeSub: Schema.Attribute.String;
    uptimeBadgeText: Schema.Attribute.String;
  };
}

export interface DsHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_ds_highlight_cards';
  info: {
    description: 'Card with emoji icon, title, and description \u2014 used for privacy/feature highlights';
    displayName: 'DS Highlight Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_ds_icon_cards';
  info: {
    description: 'Reusable icon + title + description card. Icon is a key name resolved on frontend via ICONS map.';
    displayName: 'DS Icon Card';
  };
  attributes: {
    desc: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsLocationPin extends Struct.ComponentSchema {
  collectionName: 'components_ds_location_pins';
  info: {
    description: 'Map pin with label and CSS position as string percentages';
    displayName: 'DS Location Pin';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    left: Schema.Attribute.String;
    top: Schema.Attribute.String;
  };
}

export interface DsLocationTag extends Struct.ComponentSchema {
  collectionName: 'components_ds_location_tags';
  info: {
    description: 'Location tag with separate emoji and text fields';
    displayName: 'DS Location Tag';
  };
  attributes: {
    emoji: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsNumberedTip extends Struct.ComponentSchema {
  collectionName: 'components_ds_numbered_tips';
  info: {
    description: 'Numbered step or tip card with a display number, title, and description';
    displayName: 'DS Numbered Tip';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsOsOption extends Struct.ComponentSchema {
  collectionName: 'components_ds_os_options';
  info: {
    description: 'Operating system option card with icon, name, and short description';
    displayName: 'DS OS Option';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface DsPerfStat extends Struct.ComponentSchema {
  collectionName: 'components_ds_perf_stats';
  info: {
    description: 'Single performance metric (value + label)';
    displayName: 'DS Performance Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_ds_plan_features';
  info: {
    description: 'Single feature line item inside a pricing plan';
    displayName: 'DS Plan Feature';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_ds_pricing_plans';
  info: {
    description: 'Dedicated server pricing plan card with features';
    displayName: 'DS Pricing Plan';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaStyle: Schema.Attribute.Enumeration<['outline', 'primary']> &
      Schema.Attribute.DefaultTo<'outline'>;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'&#8377;'>;
    features: Schema.Attribute.Component<'ds.plan-feature', true>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    period: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/mo'>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.Text;
    tier: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsRelatedCard extends Struct.ComponentSchema {
  collectionName: 'components_ds_related_cards';
  info: {
    description: 'Related service card with title, description, and a CTA link';
    displayName: 'DS Related Card';
  };
  attributes: {
    btnLabel: Schema.Attribute.String;
    btnUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_ds_seo_metas';
  info: {
    description: 'SEO metadata for the dedicated server page';
    displayName: 'DS SEO Meta';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface DsServerRackUnit extends Struct.ComponentSchema {
  collectionName: 'components_ds_server_rack_units';
  info: {
    description: 'Single server rack unit with label, stat, and 3 bar flex values';
    displayName: 'DS Server Rack Unit';
  };
  attributes: {
    bar1: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    bar2: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    bar3: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<4>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    stat: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsServiceButton extends Struct.ComponentSchema {
  collectionName: 'components_ds_service_buttons';
  info: {
    description: 'Button for the More Services section';
    displayName: 'DS Service Button';
  };
  attributes: {
    style: Schema.Attribute.Enumeration<['outline', 'primary']> &
      Schema.Attribute.DefaultTo<'outline'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsShieldVisual extends Struct.ComponentSchema {
  collectionName: 'components_ds_shield_visuals';
  info: {
    description: 'Security shield decorative text (headline + subtext)';
    displayName: 'DS Shield Visual';
  };
  attributes: {
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    subtext: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_ds_social_links';
  info: {
    description: 'Social media link with platform name, URL, label, and optional SVG icon';
    displayName: 'DS Social Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    svg: Schema.Attribute.Text;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_ds_testimonial_cards';
  info: {
    description: 'Client testimonial with name, title, company, quote, and rating';
    displayName: 'DS Testimonial Card';
  };
  attributes: {
    Avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    company: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    title: Schema.Attribute.String;
  };
}

export interface DsVpsPlan extends Struct.ComponentSchema {
  collectionName: 'components_ds_vps_plans';
  info: {
    description: 'VPS hosting plan with dedicated resource specs';
    displayName: 'DS VPS Plan';
  };
  attributes: {
    bandwidth: Schema.Attribute.String;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    priceNote: Schema.Attribute.String;
    ram: Schema.Attribute.String;
    storage: Schema.Attribute.String;
    vcpu: Schema.Attribute.String;
  };
}

export interface DsWhenCard extends Struct.ComponentSchema {
  collectionName: 'components_ds_when_cards';
  info: {
    description: "Numbered card for 'When Do You Need' section";
    displayName: 'DS When Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroHeroHeading extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_headings';
  info: {
    displayName: 'Hero Heading';
  };
  attributes: {
    mainHeading: Schema.Attribute.String;
  };
}

export interface HeroHeroParagraph extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_paragraphs';
  info: {
    displayName: 'Hero Paragraph';
  };
  attributes: {
    Paragraph: Schema.Attribute.String;
  };
}

export interface HeroHeroSubHeading extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sub_headings';
  info: {
    displayName: 'Hero Sub Heading';
  };
  attributes: {
    Subheading: Schema.Attribute.String;
  };
}

export interface MenuMainLogo extends Struct.ComponentSchema {
  collectionName: 'components_menu_main_logos';
  info: {
    displayName: 'mainLogo';
    icon: 'landscape';
  };
  attributes: {
    mainLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuSection extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_sections';
  info: {
    displayName: 'MenuSection';
  };
  attributes: {
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<'menu.menu-item', true>;
    lebel: Schema.Attribute.String;
  };
}

export interface MenuNavMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_nav_menus';
  info: {
    displayName: 'NavMenu';
  };
  attributes: {
    cols: Schema.Attribute.Integer;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<'menu.menu-item', true>;
    lebel: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'menu.menu-section', true>;
  };
}

export interface SectionsCloudSolutionsEngineeredSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutions_engineered_sections';
  info: {
    displayName: 'Cloud Service';
  };
  attributes: {
    animationDelay: Schema.Attribute.String;
    description: Schema.Attribute.String;
    position: Schema.Attribute.Enumeration<
      [
        'left-top',
        'left-mid',
        'left-bot',
        'right-top',
        'right-mid',
        'right-bot',
        'bottom-left',
        'bottom-right',
      ]
    >;
    svgIcon: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    description: 'Contact details used in the contact section and FAQ sidebar';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    assistanceHours: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SectionsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_cards';
  info: {
    displayName: 'Feature Card';
    icon: 'star';
  };
  attributes: {
    label: Schema.Attribute.String;
    variant: Schema.Attribute.String & Schema.Attribute.DefaultTo<'outline'>;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    description: 'Full footer content including address, socials and link columns';
    displayName: 'Footer';
    icon: 'grid';
  };
  attributes: {
    address: Schema.Attribute.RichText;
    email: Schema.Attribute.Email;
    linkGroups: Schema.Attribute.Component<'shared.footer-link-group', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero section fields for the homepage';
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    mainHeading: Schema.Attribute.String;
    price: Schema.Attribute.String;
    priceNote: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface SectionsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_images';
  info: {
    description: 'Reusable two-column text + image section (Less Complexity, Industry Validated)';
    displayName: 'Text + Image';
    icon: 'landscape';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.RichText;
  };
}

export interface SectionsWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_sections_who_we_ares';
  info: {
    description: 'Who We Are section with feature buttons';
    displayName: 'Who We Are';
    icon: 'user';
  };
  attributes: {
    featureCards: Schema.Attribute.Component<'shared.feature-button', true>;
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.RichText;
  };
}

export interface SectionsWhyUsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_us_cards';
  info: {
    displayName: 'WhyUsCard';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatureButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_buttons';
  info: {
    description: 'CTA button used inside Who We Are section';
    displayName: 'Feature Button';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['outline', 'primary']> &
      Schema.Attribute.DefaultTo<'outline'>;
  };
}

export interface SharedFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_groups';
  info: {
    description: 'A titled column of links in the footer (Services, Company, Support, Legal)';
    displayName: 'Footer Link Group';
    icon: 'layer';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.nav-link', true>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_cards';
  info: {
    description: 'Data center location with flag emoji and details';
    displayName: 'Location Card';
    icon: 'pinMap';
  };
  attributes: {
    description: Schema.Attribute.Text;
    flag: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    description: 'A single label + URL link used inside footer link groups';
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Social media link entry for the footer';
    displayName: 'Social Link';
    icon: 'earth';
  };
  attributes: {
    name: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'linkedin']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_solution_cards';
  info: {
    description: 'Product/solution card with icon, description, tagline and CTA';
    displayName: 'Solution Card';
    icon: 'apps';
  };
  attributes: {
    ctaStyle: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    tagline: Schema.Attribute.String;
  };
}

export interface SharedTechBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_badges';
  info: {
    description: 'Technology/framework badge with icon and name';
    displayName: 'Tech Badge';
    icon: 'layer';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedTldCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_tld_cards';
  info: {
    description: 'Domain TLD extension with price and badge';
    displayName: 'TLD Card';
    icon: 'earth';
  };
  attributes: {
    badge: Schema.Attribute.String;
    extension: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ZmComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_zm_comparison_rows';
  info: {
    description: 'Zimbra vs M365 comparison table row';
    displayName: 'Comparison Row';
    icon: 'columns';
  };
  attributes: {
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    m365Status: Schema.Attribute.Enumeration<['check', 'cross', 'neutral']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'neutral'>;
    m365Value: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    zimbraStatus: Schema.Attribute.Enumeration<['check', 'cross', 'neutral']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'neutral'>;
    zimbraValue: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ZmFeatureBadge extends Struct.ComponentSchema {
  collectionName: 'components_zm_feature_badges';
  info: {
    description: 'Simple text badge for feature lists';
    displayName: 'Feature Badge';
    icon: 'check-circle';
  };
  attributes: {
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ZmMigrationStep extends Struct.ComponentSchema {
  collectionName: 'components_zm_migration_steps';
  info: {
    description: 'Numbered migration step with title and description';
    displayName: 'Migration Step';
    icon: 'arrow-right';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.button': ButtonsButton;
      'ds.checklist-item': DsChecklistItem;
      'ds.cloud-plan': DsCloudPlan;
      'ds.comparison-row': DsComparisonRow;
      'ds.control-panel': DsControlPanel;
      'ds.cta-band': DsCtaBand;
      'ds.cta-link': DsCtaLink;
      'ds.faq-entry': DsFaqEntry;
      'ds.footer-address': DsFooterAddress;
      'ds.footer-link': DsFooterLink;
      'ds.footer-link-group': DsFooterLinkGroup;
      'ds.footer-section': DsFooterSection;
      'ds.hero-section': DsHeroSection;
      'ds.highlight-card': DsHighlightCard;
      'ds.icon-card': DsIconCard;
      'ds.location-pin': DsLocationPin;
      'ds.location-tag': DsLocationTag;
      'ds.numbered-tip': DsNumberedTip;
      'ds.os-option': DsOsOption;
      'ds.perf-stat': DsPerfStat;
      'ds.plan-feature': DsPlanFeature;
      'ds.pricing-plan': DsPricingPlan;
      'ds.related-card': DsRelatedCard;
      'ds.seo-meta': DsSeoMeta;
      'ds.server-rack-unit': DsServerRackUnit;
      'ds.service-button': DsServiceButton;
      'ds.shield-visual': DsShieldVisual;
      'ds.social-link': DsSocialLink;
      'ds.testimonial-card': DsTestimonialCard;
      'ds.vps-plan': DsVpsPlan;
      'ds.when-card': DsWhenCard;
      'hero.hero-heading': HeroHeroHeading;
      'hero.hero-paragraph': HeroHeroParagraph;
      'hero.hero-sub-heading': HeroHeroSubHeading;
      'menu.main-logo': MenuMainLogo;
      'menu.menu-item': MenuMenuItem;
      'menu.menu-section': MenuMenuSection;
      'menu.nav-menu': MenuNavMenu;
      'sections.cloud-solutions-engineered-section': SectionsCloudSolutionsEngineeredSection;
      'sections.contact-info': SectionsContactInfo;
      'sections.feature-card': SectionsFeatureCard;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.text-image': SectionsTextImage;
      'sections.who-we-are': SectionsWhoWeAre;
      'sections.why-us-card': SectionsWhyUsCard;
      'shared.feature-button': SharedFeatureButton;
      'shared.footer-link-group': SharedFooterLinkGroup;
      'shared.location-card': SharedLocationCard;
      'shared.nav-link': SharedNavLink;
      'shared.social-link': SharedSocialLink;
      'shared.solution-card': SharedSolutionCard;
      'shared.tech-badge': SharedTechBadge;
      'shared.tld-card': SharedTldCard;
      'zm.comparison-row': ZmComparisonRow;
      'zm.feature-badge': ZmFeatureBadge;
      'zm.migration-step': ZmMigrationStep;
    }
  }
}
