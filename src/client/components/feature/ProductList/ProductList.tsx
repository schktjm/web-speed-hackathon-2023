import type { FC } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { ProductGridList } from '../ProductGridList';
import { ProductListSlider } from '../ProductListSlider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

export const ProductList: FC<Props> = ({ featureSection }) => {
  const { width } = useWindowSize();
  return width >= 1024 ? (
    <ProductListSlider featureSection={featureSection} />
  ) : (
    <ProductGridList featureSection={featureSection} />
  );
};

ProductList.displayName = 'ProductList';
