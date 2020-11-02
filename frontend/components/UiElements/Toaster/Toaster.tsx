import React from 'react';
import { toaster, ToasterContainer } from 'baseui/toast';

const Toaster = ({ toastKey }) => {
  return (
    <ToasterContainer
      placement="bottomRight"
      overrides={{
        Root: {
          style: () => {
            return {
              zIndex: 9999,
            };
          },
        },
        ToastBody: {
          style: ({ $theme }) => {
            return {
              backgroundColor: $theme.colors.primaryA,
            };
          },
        },
      }}
    >
      {toastKey}
    </ToasterContainer>
  );
};

export default Toaster;
