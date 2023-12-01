import { FC } from 'react';

interface Props {
  title: string;
}

const SubHeading: FC<Props> = (props): JSX.Element => {
  return (
    <h2 className="text-xl font-semibold font-poppins text-center mb-6">
      {props.title}
    </h2>
  );
};

export default SubHeading;