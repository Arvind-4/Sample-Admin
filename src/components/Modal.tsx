const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative z-50 w-1/2'>
      <div className='fixed inset-0 bg-black/10' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <div className='flex min-h-full items-center justify-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
