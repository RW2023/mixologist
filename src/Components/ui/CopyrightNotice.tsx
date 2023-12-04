import { FC } from 'react';

interface Props {
  authorName: string;
  year: number;
}

const CopyrightNotice: FC<Props> = ({ year, authorName }): JSX.Element => {
  return (
    <aside>
      <p>
        Copyright © {year} - All rights reserved by {authorName}
      </p>
    </aside>
  );
};

export default CopyrightNotice;
