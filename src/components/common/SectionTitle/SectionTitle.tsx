import { Title } from "@mantine/core";

interface SectionTitleProps {
  title: string;
  color?: string;
}

const SectionTitle = ({ title, color }: SectionTitleProps) => {
  return (
    <Title
      fz={{ base: 38, md: 48, lg: 56 }}
      order={2}
      c={color}
      style={{ textAlign: "center" }}
    >
      {title}
    </Title>
  );
};

export default SectionTitle;
