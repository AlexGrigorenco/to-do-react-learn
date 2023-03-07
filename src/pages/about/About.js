


const About = () => {
    return ( 
        <div className="py-[20px]">
        
        <div className="relative">
            <h1 className="text-[30px]">
                To Do List
            </h1>
            <div className="pt-[20px] pb-[50px] flex flex-col gap-[10px] max-w-[90%]">

                <p>
                To do list on React is a simple task management application that allows creating, editing, and deleting tasks from a list. It is built on the React library, which makes working with dynamic interfaces easier.
                </p>
                <p>
                The main features of the to do list include the ability to add new tasks, mark tasks as completed or uncompleted, edit existing tasks, and delete them from the list. All changes made to the task list are instantly displayed on the screen thanks to the fast performance of React.
                </p>
                <p>
                To create a to do list on React, various tools can be used, such as components, states, and lifecycle. Components are the basic building blocks of the application that can be reused and simplify its creation. States allow the application to store and modify data, and the lifecycle defines how the component will interact with the user and other components.
                </p>

            </div>
            <span className="absolute right-[10%] bottom-0 bg-[rgba(253,86,86,0.2)] p-[6px] rounded-[4px] text-[12px]">
            Written with the help of GPTchat
            </span>
        </div>
        </div>
     );
}
 
export default About;