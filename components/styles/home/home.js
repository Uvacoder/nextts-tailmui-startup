import tw, { styled } from 'twin.macro'
export {
    SGrid
}

const SGrid = styled.div`
${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-20 gap-7`}
`