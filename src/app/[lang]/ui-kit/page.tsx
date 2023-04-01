import { Typography } from '@components/core';

function UiKit() {
  return (
    <div>
      <Typography type="h1">Anton Fedulov</Typography>
      <Typography type="h2">Anton Fedulov</Typography>
      <Typography type="h3">Anton Fedulov</Typography>
      <Typography type="h4">Anton Fedulov</Typography>
      <Typography type="h5">Anton Fedulov</Typography>
      <Typography type="h6">Anton Fedulov</Typography>

      <p>
        <Typography type="p1" styleType={['bold']}>
          Test
        </Typography>
      </p>
      <p>
        <Typography type="p2" styleType={['italic']}>
          Test
        </Typography>
      </p>
      <p>
        <Typography type="p3" styleType={['underlined']}>
          Test
        </Typography>
      </p>
      <Typography type="p4" isSpan={false} styleType={['bold', 'underlined']}>
        Test
      </Typography>
      <Typography type="p5" isSpan={false} styleType={['bold', 'italic']}>
        Test
      </Typography>
      <Typography type="p6" isSpan={false} styleType={['bold', 'italic', 'underlined']}>
        Test
      </Typography>
    </div>
  );
}

export default UiKit;
