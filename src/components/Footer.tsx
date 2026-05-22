export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-stroke w-full">
      <div className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="flex items-center gap-2.5 group cursor-default">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container border border-surface-stroke text-primary transition-all duration-300 group-hover:bg-primary-container group-hover:text-surface-container-low">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
          </div>
          <span className="font-display-md text-xl font-extrabold tracking-tight text-text-primary">
            ismail<span className="text-text-muted font-normal animate-pulse">_</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-text-muted hover:text-primary transition-opacity duration-200 font-body-md text-body-md" href="#">Github</a>
          <a className="text-text-muted hover:text-primary transition-opacity duration-200 font-body-md text-body-md" href="#">LinkedIn</a>
          <a className="text-text-muted hover:text-primary transition-opacity duration-200 font-body-md text-body-md" href="#">Twitter</a>
          <a className="text-text-muted hover:text-primary transition-opacity duration-200 font-body-md text-body-md" href="#">Email</a>
        </div>
        <div className="text-text-muted font-body-md text-sm text-center md:text-right">
          © {new Date().getFullYear()} Developer Portfolio. Built with precision.
        </div>
      </div>
    </footer>
  );
}
