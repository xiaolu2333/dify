import {memo} from 'react'
import {MiniMap} from 'reactflow'
import UndoRedo from '../header/undo-redo'
import ZoomInOut from './zoom-in-out'
import Control from './control'
import EditingTitle from "@/app/components/workflow/header/editing-title";

export type OperatorProps = {
  handleUndo: () => void
  handleRedo: () => void
}

const Operator = ({handleUndo, handleRedo}: OperatorProps) => {
  return (
    <>
      <div className='absolute bottom-4 left-4 z-[9] top-30 mt-1 flex items-center gap-2'>
        <UndoRedo handleUndo={handleUndo} handleRedo={handleRedo}/>
        <Control/>
        <div>
          <EditingTitle/>
        </div>
      </div>
    </>
  )
}

export default memo(Operator)
