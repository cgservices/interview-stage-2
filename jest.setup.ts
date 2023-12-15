import '@testing-library/jest-dom';

['error', 'warn'].forEach((type) => {
  console[type] = (...consoleParams) => {
    console.log.apply(console, consoleParams);
    throw new Error(
      `Failing due to console.${type} while running test!\n\n${consoleParams}`,
    );
  };
});
