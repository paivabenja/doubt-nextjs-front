type Props = {
  params: {
    id: number;
  };
};

export default function page(props: Props) {
  return <div>pgina de did {props.params.id}</div>;
}
