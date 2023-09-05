/* Spec:
{
    data: [
        {
            sectionYear: "2023",
            posts: [
                {
                    ..postObject
                },
            ],
        },
    ],
    page: {
        number: page,
        total: totalPages,
        prev: prevPageNum,
        next: nextPageNum,
    },
}*/
export function paginate(data, page) {
    const PAGE_LENGTH = 10;
    var allPost = getAllPost(data);
    var num_pages = Math.ceil(allPost.length / PAGE_LENGTH);

    var page = page == undefined ? 1 : parseInt(page);
    page = isNaN(page) ? 1 : page;
    page = page < 1 ? 1 : page;
    page = page > num_pages ? num_pages : page;

    var index = {
        start: PAGE_LENGTH * (page - 1),
        end: PAGE_LENGTH * page - 1 > allPost.length - 1 ? allPost.length - 1 : PAGE_LENGTH * page - 1,
    };
    var displayedPost = allPost.slice(index.start, index.end + 1);
    var allYears = new Set(displayedPost.map((item) => item.created_at_formatted.object.getFullYear()));
    var displayDataPoint = [];
    allYears.forEach((item) => {
        displayDataPoint.push({
            sectionYear: item.toString(),
            posts: displayedPost.filter((post) => (post.created_at_formatted.object.getFullYear() == item ? true : false)).map((post) => post),
        });
    });

    return {
        data: displayDataPoint,
        page: {
            now: page,
            total: num_pages,
            prev: page < 2 ? null : page - 1,
            next: page >= num_pages ? null : page + 1,
        },
    };
}

export function getAllPost(data) {
    data.forEach((elem) => {
        elem.created_at_formatted = parseDate(elem.created_at);
    });

    data.sort((b, a) => {
        return a.created_at_formatted.object - b.created_at_formatted.object;
    });

    return data;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function parseDate(datestring, withYear = false) {
    if (!datestring) return null;
    var dateArray = datestring.split("-");
    dateArray = dateArray.map((item) => {
        return parseInt(item);
    });
    var dateObj = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
    var string = dateObj.getDate() + " " + months[dateObj.getMonth()];
    string = string + (withYear ? " " + dateObj.getFullYear() : "");

    return {
        object: dateObj,
        string: string,
    };
}
