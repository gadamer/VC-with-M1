// Course modal component with Courseau iframe integration
import React from 'react'
import Modal from './Modal'

export default function CourseModal({ isOpen, onClose }) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Vibe Coding Course"
      size="full"
    >
      <div className="h-[80vh] w-full">
        {/* Courseau course embed */}
        <iframe 
          src="https://app.courseau.co/projects/aca90ee7-81a5-4a86-85db-a5fb10469735/preview?mode=course" 
          style={{ border: 'none', height: '100%', width: '100%' }}
          allowTransparency="true"
          title="Vibe Coding Course"
        />
      </div>
    </Modal>
  )
}
