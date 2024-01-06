import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibNonPublicBuildableProps {}

const StyledLibNonPublicBuildable = styled.div`
  color: pink;
`;

export function LibNonPublicBuildable(props: LibNonPublicBuildableProps) {
  return (
    <StyledLibNonPublicBuildable>
      <h1>Welcome to LibNonPublicBuildable!</h1>
    </StyledLibNonPublicBuildable>
  );
}

export default LibNonPublicBuildable;
