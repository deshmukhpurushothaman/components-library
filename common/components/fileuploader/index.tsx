import React, { useCallback } from 'react';

// import { IconImageAlt } from '../../icons/IconImageAlt';


export type FileUploaderProps = {
    onChange: (files: FileList) => void;
    multiple?: boolean;
    fileType?: string;
    children?: React.ReactNode;
};

export function FileUploader(props: FileUploaderProps): JSX.Element {
    const { onChange, multiple = false, fileType = 'image', children } = props;

    const onChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files);
        }
    };

    // TODO: Drag and Drop file need to be added
    const onClickFileUploader = useCallback(() => {
        document.getElementById('file-uploader')?.click();
    }, []);

    return (
        <div className="flex w-fit h-fit">
            {children ? (
                React.Children.toArray(children).map((child) => {
                    return React.cloneElement(child as JSX.Element, {
                        onClick: onClickFileUploader,
                    });
                })
            ) : (
                <div className="flex flex-col justify-center items-center text-center w-60 h-50 bg-white border-gray-5 rounded-xs cursor-pointer gap-4 text-sm select-none hover:border-primary-base" onClick={onClickFileUploader}>
                    <div>
                        {/* <IconImageAlt size="28" /> */}
                    </div>
                    <div className="text-bold leading-5 text-primary-base">Click to upload</div>
                    {/* <div>
            or
            <br />
            drag or drop your {fileType} here
          </div> */}
                </div>
            )}
            <input
                id="file-uploader"
                type="file"
                onChange={onChangeFileUpload}
                multiple={multiple}
                className='hidden'
            />
        </div>
    );
}
