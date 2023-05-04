'use client';

import { Button, ButtonLink, Link, Typography } from '@components/core';

import { Params } from '../types';

function UiKit({ params }: Params) {
  console.log({ params });
  return (
    <>
      <Typography type="h1">Тексты</Typography>
      <div>
        <Typography type="h1">Заголвок 1</Typography>
        <Typography type="h2">Заголвок 2</Typography>
        <Typography type="h3">Заголвок 3</Typography>
        <Typography type="h4">Заголвок 4</Typography>
        <Typography type="h5">Заголвок 5</Typography>
        <Typography type="h6">Заголвок 6</Typography>

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
      <Typography type="h1">Ссылки</Typography>
      <div>
        <Link href="/ui-kit" locale={params.lang} linkIcon underline="always">
          Ссылка
        </Link>
        <br />
        <Link href="/" locale={params.lang} underline="hover">
          Ссылка
        </Link>
        <br />
        <Link href="/" locale={params.lang}>
          Ссылка
        </Link>
      </div>
      <Typography type="h1">Кнопки</Typography>
      <ButtonLink href="/" locale={params.lang}>
        Link Test
      </ButtonLink>
      <Button role="secondary" onClick={console.log}>
        Button Test
      </Button>
      <Typography type="h1">Картинки</Typography>
      <Typography type="h1">Код</Typography>
    </>
  );
}

export default UiKit;
