export interface Navbar {
  data: {
    attributes: {
      items: NavbarItem[];
    };
  };
}
export interface NavbarItem {
  id: number;
  title: string;
  to: string;
}
