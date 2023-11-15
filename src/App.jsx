import React from 'react'
import { useState } from 'react'
import { InfoModal } from './lib'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModalClick = () => {
    setIsModalOpen(true)
  }

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '5',
        top: '50%',
        left: '50%',
        background: 'rgba(0, 0, 0, 0.2)',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <button
        style={{
          width: 200,
          height: 100,
          padding: 5,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 25,
          fontSize: 20,
          background: 'rgba(255, 246, 235, 1)',
        }}
        onClick={() => {
          handleOpenModalClick()
        }}
      >
        Open Modal
      </button>
      {isModalOpen ? (
        <InfoModal
          setIsModalOpen={setIsModalOpen}
          title={'HELLO WORLD'}
          information={'WELLCOME'}
          modalBg={
            'radial-gradient(circle, rgba(255, 246, 235, 1) 0%, rgba(255, 228, 196, 1) 70%)'
          }
          TitleTextAlign={'center'}
          TitleTextColor={'#00bc77'}
          InformationTextAlign={'center'}
          InformationTextColor={'#257b5a'}
          ValidationBtnBgColor={'transparent'}
          ValidationBtnColor={'#257b5a'}
        />
      ) : null}
    </main>
  )
}

export default App
