
export default async function GET(request) {
    const { searchParams } = new URL(request.url)
    // const name = searchParams.get('name');
    // const age = searchParams.get('age');

    // console.log(searchParams)
    // console.log(name,age)

    const obj = Object.fromEntries(searchParams.entries());
    console.log(obj)
  return NextResponse.json(obj)
}
