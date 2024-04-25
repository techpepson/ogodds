import { DropdownMenu } from '@radix-ui/themes'

const result = [
    {id:"pending",value:"pending"},
    {id:"won",value:"won"},
    {id:"lost",value:"lost"}
]
export default function OddsRecord({ isNew,handleOnchange,formData }: any) {
  return (
    <div className="w-full flex flex-wrap gap-2 items-center">
      <input
        type="text"
        name="league"
        placeholder="league"
        value={formData.league}
        className='p-2 ring-1 ring-gray-900/5 shadow-sm'
        onChange={handleOnchange}
      />
      <input
        type="text"
        name="teams"
        placeholder="teams"
        value={formData.teams}
        className='p-2 ring-1 ring-gray-900/5 shadow-sm'
        onChange={handleOnchange}
      />
      <input
        type="text"
        name="tips"
        placeholder="tips"
        value={formData.tips}
        className='p-2 ring-1 ring-gray-900/5 shadow-sm'
        onChange={handleOnchange}
      />
      {!isNew && (
        <>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className='text-base font-medium text-gray-900/80 ring-1 p-2 px-2 rounded-lg ring-gray-900/10'>Result</button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                {result.map((option) => {
                    return (
                      <DropdownMenu.Item>
                        <input id={option.id} type="radio" name="result" value={option.value}/>
                        <label
                          htmlFor={option.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          {option.value}
                        </label>
                      </DropdownMenu.Item>
                    );
                })}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </>
      )}
    </div>
  );
}
