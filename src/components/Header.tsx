import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-primary-foreground">
          Internship Journal
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="px-3 py-2 text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/over" className="px-3 py-2 text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                  About Me
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="px-3 py-2 text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
