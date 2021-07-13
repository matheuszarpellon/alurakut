import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: '8px' }}
        alt="foto"
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'matheuszarpellon'
  const pessoasFavoritas = [
    'xTecna', 
    'omariosouto',
    'juunegreiros', 
    'marcobrunodev',
    'GuilhermeProenca',
    'diego3g'
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem-vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <Box>
            <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
            {pessoasFavoritas.map((pessoa => {
              return (
                <li>
                  <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} alt="" />
                    <span>{pessoa}</span>
                  </a>
                </li>
              )
            }
            ))}
            </ul>
            </ProfileRelationsBoxWrapper>
          </Box>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}
