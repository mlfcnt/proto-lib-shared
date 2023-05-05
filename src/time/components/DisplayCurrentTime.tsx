import React from "react";

/**
 * Component for showing the current time.\
 * @example <DisplayCurrentTime currentTime={new Date()} location="London" />
 */
export const DisplayCurrentTime = ({
  currentTime,
  location,
}: {
  currentTime: Date;
  location: string;
}) => {
  return (
    <div>
      <p>
        It is {new Date(currentTime).toDateString()} in {location}
      </p>
    </div>
  );
};
