function HeaderRow({ isCreateOrUpdate }: { isCreateOrUpdate?: boolean }) {
  return (
    <thead>
      <th>Parameter</th>
      <th>{isCreateOrUpdate ? 'Type' : 'Default'}</th>
      <th>Values / Description</th>
    </thead>
  )
}

function Row({
  name,
  defaultValue,
  description,
}: {
  name: string
  defaultValue: string
  description: string
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{defaultValue}</td>
      <td>{description}</td>
    </tr>
  )
}

const queryValues = (filter) => {
  if (['string', 'boolean', 'number'].includes(filter.type)) {
    return filter.type
  }
  return filter.values.map((value) => {
    return (
      <>
        <code>{value.value}</code>{' '}
      </>
    )
  })
}

const queryDefaultValue = (filter) => {
  if (Array.isArray(filter.default)) {
    return filter.default.map((value) => (
      <>
        <code>{value}</code>{' '}
      </>
    ))
  } else {
    return filter.default
  }
}

function CreateOrUpdateParams({ attributes }: { attributes: any[] }) {
  if (!attributes || attributes.length === 0) return null

  return attributes.map((attr: any) => {
    const description = (() => {
      if (attr.values) {
        return attr.values.map((value: any) => (
          <>
            <code>{value}</code>{' '}
          </>
        ))
      } else {
        return attr.helpText
      }
    })()

    const type = (() => {
      if (attr.multiple) {
        return `array of ${attr.type}s`
      } else {
        return attr.type
      }
    })()

    const name = `${attr.key}${attr.required ? '*' : ''}`
    return <Row name={name} defaultValue={type} description={description} />
  })
}

function Filters({ filters }: { filters: any }) {
  if (!filters || Object.keys(filters).length === 0) return null
  return (
    <>
      {Object.keys(filters).map((filterName) => {
        const filter = filters[filterName]
        const name = filter.required
          ? `filter[${filterName}]` + '*'
          : `filter[${filterName}]`
        return (
          <Row
            name={name}
            defaultValue={queryDefaultValue(filter)}
            description={queryValues(filter)}
          />
        )
      })}
    </>
  )
}

export default function Parameters({
  model,
  includeOnly,
  isCreateOrUpdate,
}: {
  model: any
  includeOnly?: boolean
  isCreateOrUpdate?: boolean
}) {
  return (
    <table>
      <HeaderRow isCreateOrUpdate={isCreateOrUpdate} />
      {isCreateOrUpdate ? (
        <CreateOrUpdateParams attributes={model.operations.create.attributes} />
      ) : (
        <>
          {!includeOnly && (
            <>
              <Filters filters={model.filters} />
              <Row
                name="page[size]"
                defaultValue="50"
                description="Maximum number of results"
              />
              <Row
                name="page[number]"
                defaultValue="1"
                description="Page number"
              />
            </>
          )}
          {model.includes && (
            <Row
              name="include"
              defaultValue=""
              description={model.includes.map((i: string) => (
                <>
                  <code>{i}</code>{' '}
                </>
              ))}
            />
          )}
        </>
      )}
    </table>
  )
}
