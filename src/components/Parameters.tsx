function HeaderRow() {
  return (
    <thead>
      <th>Parameter</th>
      <th>Default</th>
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

function Filters({ filters }: { filters: any }) {
  if (!filters || Object.keys(filters).length === 0) return null
  return (
    <>
      {Object.keys(filters).map((filterName) => {
        const filter = filters[filterName]
        const name = filter.required ? filterName + '*' : filterName
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
}: {
  model: any
  includeOnly?: boolean
}) {
  return (
    <table>
      <HeaderRow />
      {!includeOnly && (
        <>
          <Filters filters={model.filters} />
          <Row
            name="page[size]"
            defaultValue="50"
            description="Maximum number of results"
          />
          <Row name="page[number]" defaultValue="1" description="Page number" />
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
    </table>
  )
}
