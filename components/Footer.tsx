import LogoLink from "./LogoLink";
import { Facebook, Instagram, LucideIcon, Phone } from "lucide-react";
import Link from "next/link";

const footerInfo = [
  {
    title: "Location",
    list: ["123 Anywhere Ave.", "Richmond, XD 123abc"],
  },
  {
    title: "Gym Hours",
    list: ["Monday - Friday", "7am - 10pm", "Saturday & Sunday", "9am - 9pm"],
  },
  {
    title: "Services",
    list: ["Membership", "Personal training"],
  },
];

const Footer = () => {
  return (
    <section className="py-10 mt-10 px-4 flex flex-col sm:px-8 bg-neutral-950">
      <LogoLink className="text-4xl mb-8 w-fit" />
      <div className="grid grid-cols-2 lg:grid-cols-4 text-muted-foreground gap-y-8">
        {footerInfo.map((item) => (
          <div key={item.title} className="space-y-4">
            <h1 className="text-lg text-neutral-100 font-semibold">
              {item.title}
            </h1>
            <ul className="space-y-2">
              {item.list.map((listItem) => (
                <li key={listItem}>
                  {item.title === "Services" ? (
                    <Link
                      href={`/services/${listItem
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                      className="hover:text-white transition"
                    >
                      {listItem}
                    </Link>
                  ) : (
                    <span>
                      {listItem}
                      <br />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h1 className="text-lg text-neutral-100 font-semibold">
            Stay Connected
          </h1>
          <ul className="space-y-2">
            <li>
              <Link href={"/contact"} className="hover:text-white transition">
                Contact
              </Link>
            </li>

            <div className="flex items-center gap-x-8">
              <li>
                <Link href={"#"} className="hover:text-white transition">
                  <Phone size={20} />
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-white transition">
                  <Instagram size={20} />
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-white transition">
                  <Facebook size={20} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
