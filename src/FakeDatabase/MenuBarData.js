const MenuData = [
  {
    header: "Company Management",
    list: [
      "dashboard",
      "company details",
      "contact details",
      "Terms of services",
      "category",
    ],
  },
  {
    header: "Customer Management",
    list: ["user list", "site list", "domain list", "customer tickets"],
  },
  {
    header: "Developer Management",
    list: ["developer list", "script list", "payment", "developer tickets"],
  },
  {
    header: "Business Plan Management",
    list: ["business plan", "user ideas list"],
  },
];
export function getMenu() {
  return MenuData;
}
