import { Metadata } from 'next';

import { Button, ButtonLink, Link, Typography } from '@/components/core';
import { Select } from '@/components/core/select';
import { FloatingBlock } from '@/components/floating-block';
import { Markdown } from '@/components/markdown';
import { Marquee } from '@/components/marquee';

import { Params } from '../types';

export const metadata: Metadata = {
  title: 'Ui-kit',
};

async function UiKit({ params }: Params) {
  if (process.env.NODE_ENV !== 'development') {
    return <></>;
  }
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
        <Link href="/ui-kit" locale={params.lang} underlined="always" linkIcon>
          Ссылка
        </Link>
        <br />
        <Link href="/" locale={params.lang} underlined="hover" linkIcon>
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
      <Button>Button Test</Button>
      <Typography type="h1">Летающие объекты</Typography>
      <FloatingBlock block={<>Картинка1</>}>
        <div className="h-72 w-72 bg-gray"></div>
      </FloatingBlock>
      <FloatingBlock block={<>Картинка2</>} position="center">
        <div className="h-72 w-72 bg-gray"></div>
      </FloatingBlock>
      <Typography type="h1">Разметка</Typography>
      <Markdown>{'#### Razmetka\n```const code = "test"```'}</Markdown>
      <Typography type="h1">Свич темы</Typography>
      Не работает на сервере
      {/* <ThemeSwitch /> */}
      <Typography type="h1">Селект</Typography>
      <Select
        locale="de"
        value="Test1"
        name="test"
        options={[
          { value: 'Test1', label: 'Test1' },
          { value: 'Test2', label: 'Test2' },
        ]}
      />
      <Typography type="h1">Бегущая строка</Typography>
      <Marquee speed={8} repeatTimes={6}>
        <Typography type="marquee">TestTestTestTest TestTes</Typography>
      </Marquee>
      <Marquee speed={6} direction="right" repeatTimes={6}>
        <Typography type="marquee">TestTestTestTest TestTes</Typography>
      </Marquee>
      <Marquee speed={4} repeatTimes={6}>
        <Typography type="marquee">TestTestTestTest TestTes</Typography>
      </Marquee>
      <div className="h-[2000px]"></div>
    </>
  );
}

export default UiKit;
