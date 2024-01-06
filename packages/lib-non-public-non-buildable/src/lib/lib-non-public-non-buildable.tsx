import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibNonPublicNonBuildableProps {}

const StyledLibNonPublicNonBuildable = styled.div`
  color: pink;
`;

export function LibNonPublicNonBuildable(props: LibNonPublicNonBuildableProps) {
  return (
    <StyledLibNonPublicNonBuildable>
      <h1>Welcome to LibNonPublicNonBuildable!</h1>
    </StyledLibNonPublicNonBuildable>
  );
}

export default LibNonPublicNonBuildable;
