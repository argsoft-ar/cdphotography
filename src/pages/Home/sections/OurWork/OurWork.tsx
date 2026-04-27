import "./OurWork.css";
import { Tabs } from "../../../../components/Tabs/Tabs";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";

const CATEGORIES = [
  {
    label: "Bodas",
    images: [
      { publicId: "BODAS_11_eous9y", alt: "Fotografía de retrato 1" },
      { publicId: "BODAS_3_lgihic", alt: "Fotografía de retrato 2" },
      { publicId: "BODAS_2_ay8pa9", alt: "Fotografía de retrato 3" },
      { publicId: "BODAS_10_zuht3h", alt: "Fotografía de retrato 4" },
      { publicId: "BODAS_9_uf2wcw", alt: "Fotografía de retrato 5" },
      { publicId: "BODAS_7_nearng", alt: "Fotografía de retrato 6" },
    ],
  },
  {
    label: "Cumpleaños",
    images: [
      { publicId: "CUMPLES_7_qxrf3k", alt: "Fotografía de boda 1" },
      { publicId: "CUMPLES_8_bie2ii", alt: "Fotografía de boda 2" },
      { publicId: "CUMPLES_5_khkyux", alt: "Fotografía de boda 3" },
      { publicId: "CUMPLES_3_zb9zap", alt: "Fotografía de boda 4" },
      { publicId: "CUMPLES_6_wzlqge", alt: "Fotografía de boda 5" },
      { publicId: "CUMPLES_2_sk2ypw", alt: "Fotografía de boda 6" },
    ],
  },
  {
    label: "Marca Personal",
    images: [
      {
        publicId: "MARCA_PERSONAL_1_dr5h96",
        alt: "Fotografía de naturaleza 1",
      },
      {
        publicId: "MARCA_PERSONAL_2_smai21",
        alt: "Fotografía de naturaleza 2",
      },
      {
        publicId: "MARCA_PERSONAL_6_mh8wur",
        alt: "Fotografía de naturaleza 3",
      },
      {
        publicId: "MARCA_PERSONAL_8_lspvvp",
        alt: "Fotografía de naturaleza 4",
      },
      {
        publicId: "MARCA_PERSONAL_3_k4mwho",
        alt: "Fotografía de naturaleza 5",
      },
      {
        publicId: "MARCA_PERSONAL_7_d7qkou",
        alt: "Fotografía de naturaleza 6",
      },
    ],
  },
  {
    label: "Quinces",
    images: [
      { publicId: "QUINCES_2_wrh2iv", alt: "Fotografía de evento 1" },
      { publicId: "QUINCES_3_ocdoco", alt: "Fotografía de evento 2" },
      { publicId: "QUINCES_1_dw1q3e", alt: "Fotografía de evento 3" },
      { publicId: "QUINCES_4_wyjswx", alt: "Fotografía de evento 4" },
      { publicId: "QUINCES_6_xo10o7", alt: "Fotografía de evento 5" },
      { publicId: "QUINCES_9_elicab", alt: "Fotografía de evento 6" },
    ],
  },
  {
    label: "Sesiones de maternidad",
    images: [
      {
        publicId: "SESION_MATERNIDAD_MALU_Y_JULI_42_kfmgoz",
        alt: "Fotografía de evento 1",
      },
      {
        publicId: "ORNE_FACU_Y_GUADI_23_fq65ty",
        alt: "Fotografía de evento 2",
      },
      {
        publicId: "ORNE_FACU_Y_GUADI_41_i60s1w",
        alt: "Fotografía de evento 3",
      },
      {
        publicId: "SESION_MATERNIDAD_MALU_Y_JULI_21_yvzdtl",
        alt: "Fotografía de evento 4",
      },
      {
        publicId: "SESION_MATERNIDAD_JACKY_41_ohsvnn",
        alt: "Fotografía de evento 5",
      },
      {
        publicId: "SESION_MATERNIDAD_MALU_Y_JULI_11_lkswhl",
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
        <h2 className="our-work__title">Nuestros Trabajos</h2>
        <p className="our-work__subtitle">
          Una selección curada de nuestras sesiones y proyectos más
          significativos.
        </p>
        <Tabs tabs={tabs} autoRotate interval={6000} />
      </div>
    </section>
  );
};
