import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  ImagePicture,
  SimpleSelect,
  OptionItem,
  Button,
} from "@nlmk/ds-2.0";

interface Size {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ProductCardProps {
  imageSrc?: string;
  name?: string;
  price?: number;
  sizes?: Size[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc = "https://via.placeholder.com/200x200",
  name = "Product Name",
  price = 0.0,
  sizes = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ],
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].value);

  const handleSizeChange = (value: string | number) => {
    setSelectedSize(value.toString());
  };

  const description =
    "Высококачественный продукт для комфорта и стиля вашего гардероба";

  return (
    <Card>
      <Box flexDirection="column" gap="var(--24-space)">
        <ImagePicture
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          aspectRatio="ratio-1x1"
        />
        <Box gap="var(--16-space)" flexDirection="column">
          <Typography variant="Heading3" style={{ marginBottom: "8px" }}>
            {name}
          </Typography>
          <Typography variant="Body1-Medium" color="var(--text-secondary)">
            {description}
          </Typography>
          <Typography variant="Body1-Medium">${price.toFixed(2)}</Typography>
          <SimpleSelect value={selectedSize} onChange={handleSizeChange}>
            {sizes.map(({ value, label, disabled }) => (
              <OptionItem
                key={value}
                value={value}
                label={label}
                disabled={disabled}
              >
                {label}
              </OptionItem>
            ))}
          </SimpleSelect>
          <Button variant="primary">Купить</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
