import { AddEmployeeButtonWrapper } from './addEmployeeButtonWrapper'
import React from 'react'
import HeaderWrapper from '../HeaderWrapper'
import Input from '@/components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import FileUploader from '@/components/FileUploader/FileUploader'
import DropDown from '@/components/DropDown/DropDown'

type employeeFormInputs = {
    firstname: string
    lastname: string
    avatar: any
    department: any
}

function FullScreenWrapper() {
    const methods = useForm<employeeFormInputs>({
        mode: 'onChange',
        delayError: 500,
    })
    const { control, handleSubmit } = methods

    const onSubmit: SubmitHandler<employeeFormInputs> = (data) => {
        console.log(data)
    }

    const h4Styles = 'text-sm font-medium'
    return (
        <div
            className="z-30 flex w-[813px] flex-col items-end gap-[37px] rounded-[10px] bg-white px-[50px] pt-10 pb-[60px] brightness-100"
            onMouseDown={(e) => e.stopPropagation()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
            >
                <g clipPath="url(#clip0_504_15522)">
                    <path
                        d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM22.3567 20C22.3567 20 27.5883 25.2317 27.845 25.4883C28.4967 26.14 28.4967 27.195 27.845 27.845C27.1933 28.4967 26.1383 28.4967 25.4883 27.845C25.2317 27.59 20 22.3567 20 22.3567C20 22.3567 14.7683 27.5883 14.5117 27.845C13.86 28.4967 12.805 28.4967 12.155 27.845C11.5033 27.1933 11.5033 26.1383 12.155 25.4883C12.41 25.2317 17.6433 20 17.6433 20C17.6433 20 12.4117 14.7683 12.155 14.5117C11.5033 13.86 11.5033 12.805 12.155 12.155C12.8067 11.5033 13.8617 11.5033 14.5117 12.155C14.7683 12.41 20 17.6433 20 17.6433C20 17.6433 25.2317 12.4117 25.4883 12.155C26.14 11.5033 27.195 11.5033 27.845 12.155C28.4967 12.8067 28.4967 13.8617 27.845 14.5117C27.59 14.7683 22.3567 20 22.3567 20Z"
                        fill="#DEE2E6"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_504_15522">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="flex w-full flex-col items-center gap-[45px]">
                <HeaderWrapper
                    text={'თანამშრომლის დამატება'}
                    fontClassNames="text-[32px] font-medium"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="grid w-full grid-cols-2 gap-[45px]">
                            <Input
                                h4CustomClasses={h4Styles}
                                control={control}
                                name="firstname"
                                title="სახელი"
                                required
                                type="text"
                            />
                            <Input
                                h4CustomClasses={h4Styles}
                                control={control}
                                name="lastname"
                                title="გვარი"
                                required
                                type="text"
                            />
                            <FileUploader
                                control={control}
                                h4CustomClasses={h4Styles}
                                customStyles="col-span-2"
                                name="avatar"
                                required
                                title="ავატარი"
                            />
                            <DropDown
                                name="department"
                                control={control}
                                required
                                title="დეპარტამენტი"
                                h4CustomClasses={h4Styles}
                                items={[
                                    { id: 1, name: 'gela' },
                                    { id: 2, name: 'dad' },
                                    { id: 3, name: 'dada' },
                                ]}
                            />
                        </div>
                        <AddEmployeeButtonWrapper />
                    </form>
                    <DevTool control={control} />
                </HeaderWrapper>
            </div>
        </div>
    )
}

export default FullScreenWrapper
