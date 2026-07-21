import "./OurWork.css";
import { Tabs } from "../../../../components/Tabs/Tabs";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";

const CATEGORIES = [
  {
    label: "Bodas",
    images: [
      { publicId: "FOTO_1_kqwtzf", alt: "Fotografía de boda 1" },
      { publicId: "FOTO_2_lmm4ik", alt: "Fotografía de boda 2" },
      { publicId: "FOTO_3_v4kckt", alt: "Fotografía de boda 3" },
      { publicId: "FOTO_4_zdmhwg", alt: "Fotografía de boda 4" },
      { publicId: "FOTO_5_d7imhi", alt: "Fotografía de boda 5" },
      { publicId: "FOTO_6_e8twqz", alt: "Fotografía de boda 6" },
    ],
  },
  {
    label: "Cumpleaños",
    images: [
      { publicId: "CUMPLES_FOTO_1_zmxp5r", alt: "Fotografía de cumpleaños 1" },
      { publicId: "CUMPLES_FOTO_2_q1trg5", alt: "Fotografía de cumpleaños 2" },
      { publicId: "CUMPLES_FOTO_3_g0cckw", alt: "Fotografía de cumpleaños 3" },
      { publicId: "CUMPLES_FOTO_4_ehvhgi", alt: "Fotografía de cumpleaños 4" },
      { publicId: "CUMPLES_FOTO_5_f5sb1t", alt: "Fotografía de cumpleaños 5" },
      { publicId: "CUMPLES_FOTO_6_vstdjv", alt: "Fotografía de cumpleaños 6" },
    ],
  },
  {
    label: "Marca Personal",
    images: [
      {
        publicId: "MARCA_PERS_FOTO_1_akdkd2",
        alt: "Fotografía de marca personal 1",
      },
      {
        publicId: "MARCA_PERS_FOTO_2_pwpy7f",
        alt: "Fotografía de marca personal 2",
      },
      {
        publicId: "MARCA_PERS_FOTO_3_ewcbyf",
        alt: "Fotografía de marca personal 3",
      },
      {
        publicId: "MARCA_PERS_FOTO_4_j3cldd",
        alt: "Fotografía de marca personal 4",
      },
      {
        publicId: "MARCA_PERS_FOTO_5_b5daan",
        alt: "Fotografía de marca personal 5",
      },
      {
        publicId: "MARCA_PERS_FOTO_6_ji5xz1",
        alt: "Fotografía de marca personal 6",
      },
    ],
  },
  {
    label: "Quinces",
    images: [
      { publicId: "QUINCES_FOTO_1_ilrfre", alt: "Fotografía de quinces 1" },
      { publicId: "QUINCES_FOTO_2_tybs7c", alt: "Fotografía de quinces 2" },
      { publicId: "QUINCES_FOTO_3_tgjgcm", alt: "Fotografía de quinces 3" },
      { publicId: "QUINCES_FOTO_4_qaa6ok", alt: "Fotografía de quinces 4" },
      { publicId: "QUINCES_FOTO_5_b0twq6", alt: "Fotografía de quinces 5" },
      { publicId: "QUINCES_FOTO_6_re6oje", alt: "Fotografía de quinces 6" },
    ],
  },
  {
    label: "Sesiones de maternidad",
    images: [
      {
        publicId: "MATERNIDAD_1_garr0y",
        alt: "Fotografía de sesión de maternidad 1",
      },
      {
        publicId: "MATERNIDAD_2_bdjirf",
        alt: "Fotografía de sesión de maternidad 2",
      },
      {
        publicId: "MATERNIDAD_3_dib9nt",
        alt: "Fotografía de sesión de maternidad 3",
      },
      {
        publicId: "MATERNIDAD_4_zlyqom",
        alt: "Fotografía de sesión de maternidad 4",
      },
      {
        publicId: "MATERNIDAD_5_jp4lvp",
        alt: "Fotografía de sesión de maternidad 5",
      },
      {
        publicId: "MATERNIDAD_6_fzbldy",
        alt: "Fotografía de sesión de maternidad 6",
      },
    ],
  },
  {
    label: "Foto producto",
    images: [
      {
        publicId: "FOTOPRODUCTO_1_tm5dp2",
        alt: "Fotografía de producto 1",
      },
      {
        publicId: "FOTOPRODUCTO_2_gnso66",
        alt: "Fotografía de producto 2",
      },
      {
        publicId: "FOTOPRODUCTO_3_tmat1z",
        alt: "Fotografía de producto 3",
      },
      {
        publicId: "FOTOPRODUCTO_4_fggdbe",
        alt: "Fotografía de producto 4",
      },
      {
        publicId: "FOTOPRODUCTO_5_j5fann",
        alt: "Fotografía de producto 5",
      },
      {
        publicId: "FOTOPRODUCTO_6_r3gl4u",
        alt: "Fotografía de producto 6",
      },
    ],
  },
  {
    label: "Sesiones infantiles",
    images: [
      {
        publicId: "SESION_INFANTIL_1_jkvypa",
        alt: "Fotografía de sesión infantil 1",
      },
      {
        publicId: "SESION_INFANTIL_2_akiaw8",
        alt: "Fotografía de sesión infantil 2",
      },
      {
        publicId: "SESION_INFANTIL_3_dantcm",
        alt: "Fotografía de sesión infantil 3",
      },
      {
        publicId: "SESION_INFANTIL_4_vup5xz",
        alt: "Fotografía de sesión infantil 4",
      },
      {
        publicId: "SESION_INFANTIL_5_ypiunk",
        alt: "Fotografía de sesión infantil 5",
      },
      {
        publicId: "SESION_INFANTIL_6_ktnsuk",
        alt: "Fotografía de sesión infantil 6",
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
        <h2 className="our-work__title">Mis trabajos</h2>
        <h3 className="our-work__subtitle">
          Fotografía profesional para eventos, familias y marcas.
        </h3>
        <p className="our-work__text">
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
