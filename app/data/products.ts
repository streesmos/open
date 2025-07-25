export interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
  application: string;
  basePreparation: string;
  mixturePreparation: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "alm-500",
    name: "ALM - Микроцем 500",
    description:
      "ALM - микроцем 500 - сухая смесь на основе тонкомолотого цемента, добавок, компенсирующих усадочные деформация, и полимера, повышающего прочность сцепления с минеральными основаниями. При смешивании с водой ALM - микроцем 500 образует низковязкую, легко прокачиваемую суспензию. После затвердевания раствор обладает высокой прочностью сцепления с основанием.",
    image: "/images/prod-1.png",
    application:
      "Заполнение полостей, швов и трещин в бетонных конструкциях. Склеивание трещин и заполнение пустот при отслоении и деформации. Усиление, гидроизоляция каменных и бетонных фундаментов. Цементация грунтов: средние и крупные пески с малой водонасыщенностью и высокой скоростью фильтрации. Ремонт кирпичных кладок методом инъектирования. Рекомендовано для использования при реставрации и реконструкции объектов культурного наследия (памятников архитектуры)",
    basePreparation:
      "Основание перед проведением инъекции рекомендуется предварительно продуть сжатым воздухом и по возможности очистить водой под давлением.",
    mixturePreparation:
      "Для приготовления растворной смеси необходимо использовать воду из питьевого водоснабжения. Соотношение при смешивании: на 1 кг сухой смеси требуется 0,25-0,4 л воды, 5-8 л на 20 кг, в зависимости от поставленной задачи. Сухую смесь добавить в отмеренное количество воды и перемешать в течение 4-5 минут до получения однородной консистенции. Перемешивание производят только механизированным способом с помощью электромиксера или элетродрели с насадкой на высоких оборотах. После перемешивания растворная смесь готова к применению. Время использования готовой растворной смеси 30-45 минут. Из 20 кг сухой смеси на выходе получается около 12 л раствора.",
    specs: [
  { label: "Цвет", value: "Серый" },
  { label: "Средний размер частиц", value: "15–20 мкм" },
  { label: "Удельная поверхность", value: "Ок. 5500 см²/г" },
  { label: "Расход воды для затворения", value: "0,25–0,4 л/кг" },
  { label: "Расход воды на мешок 20 кг", value: "5–8 л" },
  { label: "Плотность растворной смеси", value: "Ок. 1,9 кг/дм³" },
  { label: "Расход сухой смеси", value: "1500–1700 кг/м³" },
  { label: "Вязкость (В3-б)", value: "30–50 сек" },
  { label: "Время использования готовой смеси", value: "30–45 мин" },
  { label: "Прочность при сжатии (28 суток)", value: "25–45 МПа" },
  { label: "Прочность при изгибе (28 суток)", value: "6–8 МПа" },
  { label: "Прочность сцепления с основанием", value: "4,5 МПа" },
  { label: "Марка водонепроницаемости", value: "W12 (не менее)" },
],
  },
  {
    slug: "coming-soon",
    name: "Скоро",
    description:
      "Мы работаем над новым продуктом и будем рады скоро преставить вам его.",
    image: "/images/prod-0.png",
    application:
      "",
    basePreparation:
      "",
    mixturePreparation:
      "",
    specs: [
      { label: "", value: "" },
    ],
  },
];
