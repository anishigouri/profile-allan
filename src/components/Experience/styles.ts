import { styled } from '@/styles'

export const ExperienceContainerStyled = styled('section', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  margin: '5rem 0',
})

export const ExperienceStyled = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  gap: '2rem',
})

export const ExperienceNavStyled = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
})

export const ExperienceItemStyled = styled('li', {
  listStyleType: 'none',
  padding: '1.5rem 1rem',
  width: '15rem',
  cursor: 'pointer',
  background: '$gray800',
  borderRadius: 8,

  variants: {
    active: {
      true: {
        borderLeft: '5px solid $blue600',
      },
    },
  },

  transition: '0.2s',

  '&:hover': {
    background: '$blue600',
  },
})

export const ExperienceItemSelectedStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const ExperienceItemSelectedLogoStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
})
