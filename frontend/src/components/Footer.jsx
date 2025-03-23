import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 pt-12 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">CommunityForce</h2>
            <p className="text-muted-foreground">
              Connecting communities for social good since 2025.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><p className="text-muted-foreground">Projects</p></li>
              <li><p className="text-muted-foreground">Organizations</p></li>
              <li><p className="text-muted-foreground">Volunteers</p></li>
             
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <Link to="/About-Us">
              About Us
            </Link>
            <ul className="space-y-2">

              <li><Link to={"/contact"} className="text-muted-foreground">Contact</Link></li>
             
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to={"/terms"} className="text-muted-foreground">Terms of Service</Link></li>
              <li><Link to={"/privacy"} className="text-muted-foreground">Privacy Policy</Link></li>
              <li><Link to={"/cookies"} className="text-muted-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground sm:mb-0">
            © {new Date().getFullYear()} CommunityForce. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <p className="text-muted-foreground">Twitter</p>
            <p className="text-muted-foreground">Instagram</p>
            <p className="text-muted-foreground">LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
