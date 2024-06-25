import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Counter } from "@/components/counter";
import { Cards } from "@/components/card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Cards name="香煎牛排" source="https://letsplay.tw/wp-content/uploads/20190722215136_6.jpg" />
        <Cards name="清蒸八爪" source="https://letsplay.tw/wp-content/uploads/2024/06/1P6A2678.jpg" />
        <Cards name="满汗全席" source="https://letsplay.tw/wp-content/uploads/2024/06/1P6A4325.jpg" />
        <Cards name="满汗全席" source="https://letsplay.tw/wp-content/uploads/2024/06/1P6A4325.jpg" />
        <Cards name="满汗全席" source="https://letsplay.tw/wp-content/uploads/2024/06/1P6A4325.jpg" />
        <Cards name="满汗全席" source="https://letsplay.tw/wp-content/uploads/2024/06/1P6A4325.jpg" />
      </div>
    </section>
  );
}
