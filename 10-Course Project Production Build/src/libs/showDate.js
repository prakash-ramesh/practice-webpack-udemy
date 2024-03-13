// import mnt from 'moment'; -- injected by webpack provide plugin -- called as shimming
// error: symbol is not defined;

export function showDate() {
    console.log(mnt(new Date()).format("DD-MM-YYYY"));
}

export function dummyFn() {
    console.log("Im a dummy Fn.");
}