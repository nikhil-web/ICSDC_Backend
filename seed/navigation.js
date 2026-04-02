// seed/navigation.js
// Mirrors the live navigation data exactly.
// Only the `url` fields have been filled in — all other values are unchanged.
// navLogo is a media relation; the logo is already uploaded — do not overwrite.

module.exports = {
  // navLogo: media relation — already uploaded in Strapi admin, omit here

  LoginButton: {
    btnText: 'Login ',
    Link: '/Login',
  },

  menus: [

    // ── Services ────────────────────────────────────────────────────────────
    {
      lebel: 'Services',
      icon: '🖥️',
      desc: 'Explore all our infrastructure services',
      cols: 2,
      sections: [
        {
          lebel: 'Dedicated Server',
          icon: '🖥️',
          items: [
            { icon: '🪟', title: 'Windows dedicated Server',  subtext: 'Sub Menu Details & subtext', url: '/windows-dedicated-server.html' },
            { icon: '🐧', title: 'Linux Dedicated Hosting',   subtext: 'Sub Menu Details & subtext', url: '/linux-dedicated-server.html' },
            { icon: '🔧', title: 'Managed dedicated Server',  subtext: 'Sub Menu Details & subtext', url: null },
            { icon: '🎮', title: 'GPU Dedicated Server',      subtext: 'Sub Menu Details & subtext', url: '/gpu-dedicated-server.html' },
            { icon: '⚡', title: 'NVme dedicated Server',     subtext: 'Sub Menu Details & subtext', url: '/nvme-dedicated-servers.html' },
            { icon: '🏗️', title: 'Bare Metal Server',         subtext: 'Sub Menu Details & subtext', url: '/bare-metal-server.html' },
            { icon: '📦', title: 'Another Menu Item',         subtext: 'Sub Menu Details & subtext', url: null },
            { icon: '📦', title: 'Another Menu Item',         subtext: 'Sub Menu Details & subtext', url: null },
          ],
        },
        {
          lebel: 'VPS Hosting',
          icon: '⚙️',
          items: [
            { icon: '🪟', title: 'Windows VPS Hosting',  subtext: 'Sub Menu Details & subtext', url: '/windows-vps-hosting.html' },
            { icon: '💻', title: 'Virtual Machine',      subtext: 'Sub Menu Details & subtext', url: '/virtual-machine.html' },
            { icon: '🐧', title: 'Linux VPS Hosting',    subtext: 'Sub Menu Details & subtext', url: '/linux-vps-hosting.html' },
            { icon: '🖥️', title: 'VPS Cpanel Hosting',  subtext: 'Sub Menu Details & subtext', url: '/vps-cpanel.html' },
            { icon: '🔧', title: 'Managed VPS Hosting',  subtext: 'Sub Menu Details & subtext', url: '/managed-vps-hosting.html' },
            { icon: '📈', title: 'Forex VPS',            subtext: 'Sub Menu Details & subtext', url: '/forex-vps.html' },
            { icon: '🧪', title: 'VPS Trial & Demo',     subtext: 'Sub Menu Details & subtext', url: null },
          ],
        },
        {
          lebel: 'Cloud Hosting',
          icon: '☁️',
          items: [
            { icon: '☁️', title: 'Public Cloud',  subtext: 'Sub Menu Details & subtext', url: '/cloud-hosting.html' },
            { icon: '🔒', title: 'Private Cloud', subtext: 'Sub Menu Details & subtext', url: null },
            { icon: '🌐', title: 'Hybrid Cloud',  subtext: 'Sub Menu Details & subtext', url: null },
            { icon: '⚡', title: 'Multi Cloud',   subtext: 'Sub Menu Details & subtext', url: null },
          ],
        },
        {
          lebel: 'Email',
          icon: '✉️',
          items: [
            { icon: '✉️', title: 'Business Email',          subtext: 'Sub Menu Details & subtext',                                         url: '/email-hosting.html' },
            { icon: '🔐', title: 'Secure Email',            subtext: 'Sub Menu Details & subtext',                                         url: null },
            { icon: '📧', title: 'Email Hosting',           subtext: 'Sub Menu Details & subtext',                                         url: '/email-hosting.html' },
            { icon: '📨', title: 'Email Migration',         subtext: 'Sub Menu Details & subtext',                                         url: null },
            { icon: '✉️', title: 'Advanced Zimbra Hosting', subtext: 'Designed for Businesses That Expect More from Their Email Hosting',   url: '/zimbra-hosting.html' },
          ],
        },
      ],
      items: [],
    },

    // ── Web Hosting ─────────────────────────────────────────────────────────
    {
      lebel: 'Web Hosting',
      icon: '🌐',
      desc: 'Fast, reliable web hosting solutions',
      cols: 3,
      sections: [],
      items: [
        { icon: '⚡', title: 'Shared Hosting',    subtext: 'Sub Menu Details & subtext', url: '/shared-hosting.html' },
        { icon: '🔲', title: 'WordPress Hosting', subtext: 'Sub Menu Details & subtext', url: '/wordpress-hosting.html' },
        { icon: '🛒', title: 'eCommerce Hosting', subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🏢', title: 'Business Hosting',  subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🚀', title: 'Reseller Hosting',  subtext: 'Sub Menu Details & subtext', url: '/reseller-hosting.html' },
        { icon: '🔧', title: 'Managed Hosting',   subtext: 'Sub Menu Details & subtext', url: null },
        { icon: null,  title: null,                subtext: null,                         url: null },
      ],
    },

    // ── Domain ──────────────────────────────────────────────────────────────
    {
      lebel: 'Domain',
      icon: '🌍',
      desc: 'Register and manage your domains',
      cols: 2,
      sections: [],
      items: [
        { icon: '🔍', title: 'Domain Search',   subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '📋', title: 'Domain Transfer', subtext: 'Sub Menu Details & subtext', url: '/domain-transfer.html' },
        { icon: '🔄', title: 'Domain Renewal',  subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🏷️', title: 'Domain Pricing',  subtext: 'Sub Menu Details & subtext', url: null },
      ],
    },

    // ── Backup & Security ───────────────────────────────────────────────────
    {
      lebel: 'Backup & Security',
      icon: '🔐',
      desc: 'Details about backup and security',
      cols: 2,
      sections: [],
      items: [
        { icon: '💾', title: 'Acronis Backup',  subtext: 'Sub Menu Details & subtext', url: '/acronis-backup.html' },
        { icon: '🗄️', title: 'Veeam Backup',    subtext: 'Sub Menu Details & subtext', url: '/veeam-backup.html' },
        { icon: '☁️', title: 'Cloud Storage',   subtext: 'Sub Menu Details & subtext', url: '/cloud-storage.html' },
        { icon: '🔑', title: 'PAM / MFA',       subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🛡️', title: 'SSL Certificate', subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🔥', title: 'Firewall',        subtext: 'Sub Menu Details & subtext', url: '/firewall-security.html' },
        { icon: '🔍', title: 'VAPT',            subtext: 'Sub Menu Details & subtext', url: '/vapt.html' },
      ],
    },

    // ── Public Cloud ────────────────────────────────────────────────────────
    {
      lebel: 'Public Cloud',
      icon: '⛅',
      desc: 'Details about Public Cloud',
      cols: 3,
      sections: [],
      items: [
        { icon: '🟧', title: 'AWS',                   subtext: 'Sub Menu Details & subtext', url: '/aws-cloud-hosting.html' },
        { icon: '🔷', title: 'Azure',                 subtext: 'Sub Menu Details & subtext', url: '/azure-cloud-hosting.html' },
        { icon: '🎨', title: 'Google Cloud Platform', subtext: 'Sub Menu Details & subtext', url: '/google-cloud-hosting.html' },
      ],
    },

    // ── Resources ───────────────────────────────────────────────────────────
    {
      lebel: 'Resources',
      icon: '📚',
      desc: 'Guides, docs, and support',
      cols: 2,
      sections: [],
      items: [
        { icon: '📖', title: 'Documentation',  subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '📝', title: 'Blog',           subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '🎓', title: 'Tutorials',      subtext: 'Sub Menu Details & subtext', url: null },
        { icon: '💬', title: 'Support Center', subtext: 'Sub Menu Details & subtext', url: null },
      ],
    },

  ],
};
