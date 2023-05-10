const users = $('#users');

$.getJSON("https://jsonplaceholder.typicode.com/users",(dat) => {
    $.each(dat, (i,usr) => {

        const li = $('<li>')

        .addClass("flex justify-between gap-x-6 py-5")
        .html(
            `<div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">${usr.name}</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">${usr.username}</p>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">${usr.email}</p>
                <p class="mt-1 text-xs leading-5 text-gray-500">${usr.id}</p>
          </div>`
        );

        li.on('click', () => {
            alert(`User name : ${usr.name} -  User id : ${usr.id}`)
        });

        users.append(li);

    });
});