import React from 'react';
import { BulletList, Bullet } from 'seek-style-guide/react';
export const symbols = {
  'BulletPoint/Small': (
    <BulletList>
      <Bullet small>Bullet point 1</Bullet>
      <Bullet small>Bullet point 2</Bullet>
      <Bullet small>Bullet point 3</Bullet>
    </BulletList>
  ),
  'BulletPoint/Standard': (
    <BulletList>
      <Bullet>Bullet point 1</Bullet>
      <Bullet>Bullet point 2</Bullet>
      <Bullet>Bullet point 3</Bullet>
    </BulletList>
  ),
  'BulletPoint/Subheading': (
    <BulletList>
      <Bullet subheading>Bullet point 1</Bullet>
      <Bullet subheading>Bullet point 2</Bullet>
      <Bullet subheading>Bullet point 3</Bullet>
    </BulletList>
  )
};
