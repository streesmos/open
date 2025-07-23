export const metadata = {
  title: "Каталог - АЛМ",
  description: "Каталог продукции",
};

import Image from "next/image";
import Link from "next/link";
import Product1 from "@/public/images/workflow-01.png";
import Product2 from "@/public/images/workflow-02.png";

export default function Catalog() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="pb-8 text-center font-nacelle text-3xl font-semibold" data-aos="fade-up">
            Каталог продукции «АЛМ»
          </h1>
          <div className="mx-auto grid max-w-sm gap-8 md:max-w-none md:grid-cols-2">
            <div className="rounded-2xl bg-gray-800 p-6" data-aos="fade-up">
              <Image src={Product1} alt="Инъекционная смола" width={350} height={288} />
              <h2 className="mt-4 text-xl font-semibold">Инъекционная смола ALM</h2>
              <p className="mt-2 text-indigo-200/65">Для герметизации трещин и швов бетона.</p>
              <p className="mt-2">Цена: 5 000 ₽</p>
            </div>
            <div className="rounded-2xl bg-gray-800 p-6" data-aos="fade-up" data-aos-delay={200}>
              <Image src={Product2} alt="Насос" width={350} height={288} />
              <h2 className="mt-4 text-xl font-semibold">Насос для инъектирования ALM</h2>
              <p className="mt-2 text-indigo-200/65">Оборудование для ремонта конструкций.</p>
              <p className="mt-2">Цена: 35 000 ₽</p>
            </div>
          </div>
          <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay={400}>
            <Link href="/contact" className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
