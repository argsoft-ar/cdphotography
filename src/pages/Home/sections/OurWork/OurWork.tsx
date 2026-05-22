import "./OurWork.css";
import { Tabs } from "../../../../components/Tabs/Tabs";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";

const CATEGORIES = [
  {
    label: "Bodas",
    images: [
      { publicId: "FOTO_1_kqwtzf", alt: "Fotografía de retrato 1" },
      { publicId: "FOTO_2_lmm4ik", alt: "Fotografía de retrato 2" },
      { publicId: "FOTO_3_v4kckt", alt: "Fotografía de retrato 3" },
      { publicId: "FOTO_4_zdmhwg", alt: "Fotografía de retrato 4" },
      { publicId: "FOTO_5_d7imhi", alt: "Fotografía de retrato 5" },
      { publicId: "FOTO_6_e8twqz", alt: "Fotografía de retrato 6" },
    ],
  },
  {
    label: "Cumpleaños",
    images: [
      { publicId: "CUMPLES_FOTO_1_zmxp5r", alt: "Fotografía de boda 1" },
      { publicId: "CUMPLES_FOTO_2_q1trg5", alt: "Fotografía de boda 2" },
      { publicId: "CUMPLES_FOTO_3_g0cckw", alt: "Fotografía de boda 3" },
      { publicId: "CUMPLES_FOTO_4_ehvhgi", alt: "Fotografía de boda 4" },
      { publicId: "CUMPLES_FOTO_5_f5sb1t", alt: "Fotografía de boda 5" },
      { publicId: "CUMPLES_FOTO_6_vstdjv", alt: "Fotografía de boda 6" },
    ],
  },
  {
    label: "Marca Personal",
    images: [
      {
        publicId: "MARCA_PERS_FOTO_1_akdkd2",
        alt: "Fotografía de naturaleza 1",
      },
      {
        publicId: "MARCA_PERS_FOTO_2_pwpy7f",
        alt: "Fotografía de naturaleza 2",
      },
      {
        publicId: "MARCA_PERS_FOTO_3_ewcbyf",
        alt: "Fotografía de naturaleza 3",
      },
      {
        publicId: "MARCA_PERS_FOTO_4_j3cldd",
        alt: "Fotografía de naturaleza 4",
      },
      {
        publicId: "MARCA_PERS_FOTO_5_b5daan",
        alt: "Fotografía de naturaleza 5",
      },
      {
        publicId: "MARCA_PERS_FOTO_6_ji5xz1",
        alt: "Fotografía de naturaleza 6",
      },
    ],
  },
  {
    label: "Quinces",
    images: [
      { publicId: "QUINCES_FOTO_1_ilrfre", alt: "Fotografía de evento 1" },
      { publicId: "QUINCES_FOTO_2_tybs7c", alt: "Fotografía de evento 2" },
      { publicId: "QUINCES_FOTO_3_tgjgcm", alt: "Fotografía de evento 3" },
      { publicId: "QUINCES_FOTO_4_qaa6ok", alt: "Fotografía de evento 4" },
      { publicId: "QUINCES_FOTO_5_b0twq6", alt: "Fotografía de evento 5" },
      { publicId: "QUINCES_FOTO_6_re6oje", alt: "Fotografía de evento 6" },
    ],
  },
  {
    label: "Sesiones de maternidad",
    images: [
      {
        publicId: "MATERNIDAD_1_garr0y",
        alt: "Fotografía de evento 1",
      },
      {
        publicId: "MATERNIDAD_2_bdjirf",
        alt: "Fotografía de evento 2",
      },
      {
        publicId: "MATERNIDAD_3_dib9nt",
        alt: "Fotografía de evento 3",
      },
      {
        publicId: "MATERNIDAD_4_zlyqom",
        alt: "Fotografía de evento 4",
      },
      {
        publicId: "MATERNIDAD_5_jp4lvp",
        alt: "Fotografía de evento 5",
      },
      {
        publicId: "MATERNIDAD_6_fzbldy",
        alt: "Fotografía de evento 6",
      },
    ],
  },
];

export const OurWork = () => {
  const tabs = CATEGORIES.map((cat) => ({
    label: cat.label,
    content: (
      <ImageGrid images={cat.images} columns={3} gap="var(--spacing-sm)" />
    ),
  }));

  return (
    <section id="work" className="our-work">
      <div className="our-work__inner">
        <p className="our-work__eyebrow">Portafolio</p>
        <h2 className="our-work__title">Nuestros trabajos</h2>
        <p className="our-work__subtitle">
          Una selección de trabajos que reflejan lo que más me gusta de la
          fotografía: capturar momentos reales y convertirlos en recuerdos que
          perduran en el tiempo.
          <br /> Cada imagen cuenta una historia, y cada historia tiene algo
          único.
        </p>

        <Tabs tabs={tabs} autoRotate interval={6000} />
      </div>
    </section>
  );
};
