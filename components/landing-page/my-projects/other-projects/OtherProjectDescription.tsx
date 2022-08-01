// title, description of project, tech stack

type Props = {
  className: string;
  text: string;
};

export default function OtherProjectDescription(props: Props) {
  return (
    <>
      <p className={props.className}>{props.text}</p>
    </>
  );
}
