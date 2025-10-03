export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (!isMarried) {
    partnerInfo = 'I am not married';
  } else if (sex === 'm') {
    partnerInfo = `My wife is ${partnerName}`;
  } else if (sex === 'f') {
    partnerInfo = `My husband is ${partnerName}`;
  }

  const hasAge = typeof age !== 'undefined';

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {hasAge && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </div>
  );
};
