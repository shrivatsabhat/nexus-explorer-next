import Toast from 'components/Toast';
import { useEffect, useState } from 'react';
import { BiClipboard, BiCopy, BiCheck } from 'react-icons/bi';
import { middleElipsis } from 'utils/converter';
import { handleCopy } from 'utils/helper';

export default function CopyText({ value, ellipsisAfter }) {
  const [toastList, setToastList] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndicator(false);
    }, 2100);
    return () => clearTimeout(timer);
  }, [indicator]);

  const handleCopyClick = () => {
    handleCopy(value);
    setIndicator(true);
    setToastList((prev) => {
      return [
        ...prev,
        {
          message: `Copied ${value}`,
          type: 'success',
          icon: <BiClipboard color="inherit" />,
        },
      ];
    });
  };

  return (
    <>
      <span data-copy={value}>
        {value &&
          `${
            value.toString().length > 12
              ? middleElipsis(value, ellipsisAfter || 12)
              : value
          }`}
        {!indicator ? (
          <BiCopy onClick={handleCopyClick} />
        ) : (
          <BiCheck color="#28a745" />
        )}
      </span>
      <Toast toastList={toastList} />
    </>
  );
}