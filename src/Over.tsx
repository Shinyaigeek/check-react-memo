import * as React from "react";
import "./main.scss";

export const Over = () => {
  const [count, setCount] = React.useState<number>(0);
  const [count2, setCount2] = React.useState<number>(0);

  return (
    <div className="over">
      <Box>
        <Box1 count={count} />
      </Box>
      <Box>
        <Box1 count={count2} />
      </Box>
      <Box>
        <Box2 count={count} />
      </Box>
      {/* <Box>
        {count >= 5 ? <Box2 count={count} /> : <></>}
      </Box> */}
      <Box>
          <Pure />
      </Box>
      <div className="column">
          <div></div>
          <button onClick={() => setCount(count + 1)}>count++</button>
          <button onClick={() => setCount2(count2 + 1)}>count2++</button>
      </div>
    </div>
  );
};

interface Box {
  children: React.ReactChild;
}

const Box = (props: Box) => {
  return <div className="box">{props.children}</div>;
};

interface Props {
  count: number;
}

const Box1 = (props: Props) => {
  return (
    <React.Fragment>
      count: {props.count}
      右のBoxはcountが5以上の時中身が表示される
    </React.Fragment>
  );
};

const Box2 = (props: Props) => {
  return (
    <React.Fragment>
      {props.count >= 5 && (
        <>countが5以上だから表示される count: {props.count}</>
      )}
    </React.Fragment>
  );
};

// const Box2 = (props: Props) => {
//   return (
//     <React.Fragment>
//       countが10以上だから表示される count: {props.count}
//     </React.Fragment>
//   );
// };

const Pure = React.memo(() => {
    return <div>ここは独立してる</div>
})
