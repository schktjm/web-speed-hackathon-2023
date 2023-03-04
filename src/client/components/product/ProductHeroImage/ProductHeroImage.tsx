import type { FC } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';

import * as styles from './ProductHeroImage.styles';

const DEFAULT_IMAGE = '/assets/transparent.png';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = ({ product, title }) => {
  const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;

  const imageDataUrl = thumbnailFile ? thumbnailFile.filename : DEFAULT_IMAGE;

  if (imageDataUrl === undefined) {
    return null;
  }

  return (
    <div className={styles.wrapper()}>
      <Anchor href={`/product/${product.id}`}>
        <div className={styles.container()}>
          <img className={styles.image()} height={9} src={imageDataUrl} width={16} />
          <div className={styles.overlay()}>
            <p className={styles.title()}>{title}</p>
            <p className={styles.description()}>{product.name}</p>
          </div>
        </div>
      </Anchor>
    </div>
  );
};

ProductHeroImage.displayName = 'ProductHeroImage';
